import {
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../pages/_app";
import { validationTextCodes } from "../../constans/validationCodes";
import {
  EmailRegisterFormValues,
  EmailLoginFormValues,
} from "../../types/auth";
import { PostCreationFormValues } from "../../types/postCreation";
import { getUserById } from "../firestoreAccess/user";
import { writeUserData } from "../firestoreWrite/user";
import {
  validateUsername,
  validateEmail,
  validatePassword,
  validateProfilePic,
  validateImages,
  validateText,

} from "./validateForm";
import { v4 as uuidv4 } from "uuid";
import { addPostToUser } from "../firestoreWrite/postCreation";


const auth = getAuth();

interface FormValidationResult {
  errorValues: ErrorValues;
  error: boolean;
  text: string | null;
}

interface ErrorValues {
  username: string;
  email: string;
  password: string;
  profilePic: string;
  text:string;
  images:any[];
}

const functionToKey = {
  username: validateUsername,
  email: validateEmail,
  password: validatePassword,
  profilePic: validateProfilePic,
  text:validateText,
  images:validateImages,
};

const returnErrorValidationResult = (
  errorValues: ErrorValues,
  error: boolean = true,
  text: string = null
): FormValidationResult => {
  return {
    errorValues,
    error,
    text,
  };
};

const getDefaultErrorValues = () => {
  return {
    username: "",
    email: "",
    password: "",
    profilePic: "",
    text:"",
    images:[]
  };
};

export const validateInput = async(
  data: any,
  errorValues: ErrorValues
): Promise<FormValidationResult> => {
  let errorCount = 0;
  for (const key of Object.keys(data)){
    if (data[key] !== null) {
      console.log(data[key],key,functionToKey[key])
      const error = await functionToKey[key](data[key]);
      if (error) {
        errorValues[key] = error;
        errorCount++;
      }
    }
  }

  // check if any inmput is incorrect
  const isError = errorCount != 0;
  return returnErrorValidationResult(errorValues, isError);
};

//  SUBMIT FUNCTIONS
const loginWithExternalGenerator = (name: "google" | "facebook") => {
  return async (): Promise<FormValidationResult> => {
    let provider;
    if (name === "google") {
      provider = new GoogleAuthProvider();
    } else {
      provider = new FacebookAuthProvider();
    }
    const errorValues = getDefaultErrorValues();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const dbData = await getUserById(user.uid);
      console.log(dbData)
      if (
        dbData === null ||
        (dbData !== null && (dbData.username === "" || dbData.username))
      ) {
        await writeUserData("", user.email, user.uid, "");
        console.log(auth.currentUser, validationTextCodes.toRegister);
        return returnErrorValidationResult(
          errorValues,
          false,
          validationTextCodes.toRegister
        );
      } else {
        console.log(auth.currentUser, validationTextCodes.goFeed);
        return returnErrorValidationResult(
          errorValues,
          false,
          validationTextCodes.goFeed
        );
      }
    } catch (error) {
      const errorMessage = error.message;
      errorValues.email = errorMessage;
      return returnErrorValidationResult(
        errorValues,
        true,
        validationTextCodes.externalLoginError
      );
    }
  };
};

export const addEmojiUsername = async (values: {
  username: string;
  profilePic: string;
}): Promise<FormValidationResult> => {
  const errorValues = getDefaultErrorValues();
  try {
    const auth = getAuth();
    const { username, profilePic } = values;
    const errorValidationResult = await validateInput({...values,email:null,password:null}, errorValues);

    if (errorValidationResult.error) {
      return errorValidationResult;
    }
    const userId = auth.currentUser.uid;
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      await updateDoc(docRef, {
        username,
        profilePic,
      });
      console.log(
        "Added nick:",
        returnErrorValidationResult(
          errorValues,
          false,
          validationTextCodes.goFeed
        )
      );
      return returnErrorValidationResult(
        errorValues,
        false,
        validationTextCodes.goFeed
      );
    } else {
      console.log("Document does not exist:");
      return returnErrorValidationResult(
        errorValues,
        true,
        validationTextCodes.failedToAddEmojiUsername
      );
    }
  } catch (e) {
    console.error(e, "addEmojiUsername JEBLO ");
    return returnErrorValidationResult(
      errorValues,
      true,
      validationTextCodes.failedToAddEmojiUsername
    );
  }
};

export const registerWithEmail = async (
  data: EmailRegisterFormValues
): Promise<FormValidationResult> => {
  const { username, email, password, profilePic } = data;
  const errorValues = getDefaultErrorValues();

  try {
    const errorValidationResult = await validateInput(data, errorValues);
    const auth = getAuth();
    if (errorValidationResult.error) {
      return errorValidationResult;
    } else {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await writeUserData(username, email, user.uid, profilePic);
      errorValidationResult.text = validationTextCodes.goFeed;
      return errorValidationResult;
    }
  } catch (e) {
    console.error("registerWithEmail catch", e);
    const errorMessage = e.message;
    errorValues.email = errorMessage;
    return { error: true, errorValues, text: errorMessage };
  }
};

export const loginWithEmail = async (
  data: EmailLoginFormValues
): Promise<FormValidationResult> => {
  const { email, password } = data;
  const errorValues = getDefaultErrorValues();
  try {
    const errorValidationResult = await validateInput(data, errorValues);
    const auth = getAuth();
    if (errorValidationResult.error) {
      return errorValidationResult;
    } else {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      errorValidationResult.text = validationTextCodes.goFeed;
      return errorValidationResult;
    }
  } catch (e) {
    const errorMessage = e.message;
    errorValues.email = errorMessage;
    return { error: true, errorValues, text: errorMessage };
  }
};

export const loginWithFacebook = loginWithExternalGenerator("facebook");
export const loginWithGoogle = loginWithExternalGenerator("google");


export const createPost = async (  data: PostCreationFormValues
  )=>{
    console.log("DATA",data)
  const errorValues = getDefaultErrorValues();
  try {
    const errorValidationResult = await validateInput({...data,email:null,password:null}, errorValues);
    if (errorValidationResult.error) {
      return errorValidationResult;
    }
    const postId = uuidv4();

    const userId = auth.currentUser.uid;
    // should add information about he post in user doc
    // should cretae post
   await  addPostToUser(userId,postId)
   return errorValidationResult;

  }
 catch (e) {
    console.error(e, "addEmojiUsername JEBLO ");
    return returnErrorValidationResult(
      errorValues,
      true,
      validationTextCodes.failedToAddEmojiUsername
    );
  }
}