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
import { getUserById } from "../firestoreAccess/user";
import { writeUserData } from "../firestoreWrite/user";
import {
  validateUsername,
  validateEmail,
  validatePassword,
  validateProfilePic,
} from "./validateForm";

const auth = getAuth();
console.log(auth.currentUser);

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
}

const functionToKey = {
  username: validateUsername,
  email: validateEmail,
  password: validatePassword,
  profilePic: validateProfilePic,
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
  };
};

export const validateInput = (
  data: EmailRegisterFormValues | EmailLoginFormValues,
  errorValues: ErrorValues
): FormValidationResult => {
  let errorCount = 0;
  Object.keys(data).forEach((key) => {
    const error = functionToKey[key](data[key]);
    if (error) {
      errorValues[key] = error;
      errorCount++;
    }
  });
  // check if any inmput is incorrect
  const isError = errorCount != 0;
  return returnErrorValidationResult(errorValues, isError);
};

//  SUBMIT FUNCTIONS
const loginWithExternalGenerator = (name: "google" | "facebook") => {
  return async () => {
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
      if (dbData === null) {
        await writeUserData("", user.email, user.uid, "");
        console.log(auth.currentUser, validationTextCodes.registered);
        return returnErrorValidationResult(errorValues, false, validationTextCodes.registered);
      } else if (dbData !== null) {
        console.log(auth.currentUser, validationTextCodes.loggedIn);
        return returnErrorValidationResult(errorValues, false, validationTextCodes.loggedIn);
      } else {
        console.log(auth.currentUser, validationTextCodes.toRegister);
        return returnErrorValidationResult(errorValues, false, validationTextCodes.toRegister);
      }
    } catch (error) {
      const errorMessage = error.message;
      errorValues.email = errorMessage;
      return returnErrorValidationResult(errorValues, true, validationTextCodes.externalLoginError);
    }
  };
};

export const addEmojiUsername = async (values: {
  username: string;
  profilePic: string;
}) => {
  const errorValues = getDefaultErrorValues();
  try {
    const auth = getAuth();
    const { username, profilePic } = values;
    const userId = auth.currentUser.uid;
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      await updateDoc(docRef, {
        username,
        profilePic,
      });
      console.log("Added nick:", docSnap.data());
      return returnErrorValidationResult(errorValues, false, validationTextCodes.addedEmojiUsername);
    } else {
      console.log("Document does not exist:");
      return returnErrorValidationResult(errorValues, true, validationTextCodes.failedToAddEmojiUsername);
    }
  } catch (e) {
    console.error(e, "addEmojiUsername JEBLO ",);
    return returnErrorValidationResult(errorValues, true, validationTextCodes.failedToAddEmojiUsername);
  }
};

export const registerWithEmail = async (data: EmailRegisterFormValues) => {
  const { username, email, password, profilePic } = data;
  const errorValues = getDefaultErrorValues();

  try {
    const errorValidationResult = validateInput(data, errorValues);
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
      return errorValidationResult;
    }
  } catch (e) {
    const errorMessage = e.message;
    errorValues.email = errorMessage;
    return { error: true, errorValues, text: errorMessage };
  }
};

export const loginWithEmail = async (data: EmailLoginFormValues) => {
  const { email, password } = data;
  const errorValues = getDefaultErrorValues();
  try {
    const errorValidationResult = validateInput(data, errorValues);
    const auth = getAuth();
    if (errorValidationResult.error) {
      return errorValidationResult;
    } else {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

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
