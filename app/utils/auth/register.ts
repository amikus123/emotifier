import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../pages/_app";
import {
  EmailLoginFormValues,
  EmailRegisterFormValues,
} from "../../types/auth";
import { writeUserData } from "../firestoreWrite/register";

// EmailRegisterFormValues

type Values = "usernames" | "postNames";

export const addToUsedValues = async (
  text: string,
  type: Values = "usernames"
) => {
  // marks name as used
  const docRef = doc(db, `usedNames/${type}/${text}`);
  const docSnap = await getDoc(docRef);
  console.log("111");
  if (docSnap.exists()) {
    return false;
  } else {
    await updateDoc(docRef, {
      a: "a",
    });
    return true;
  }
};

export const validateUsername = (username: string) => {
  if (username === "") {
    return "username shouldnt be empty";
  } else if (username.length > 5) {
    return "username is too long";
  } else if (
    false
    // emoji only chjeck
  ) {
    return "username should only cotnain emojis";
  } else {
    return false;
  }
};

const dataPairs = {
  username: validateUsername,
  email: validateUsername,
  password: validateUsername,
  profilePic: validateUsername,
};

export const validateInput = (data: EmailRegisterFormValues) => {
  const errorMap = {};
  let errorCount = 0
  Object.keys(data).forEach((key) => {
    const error = dataPairs[key](data[key]);
    if (error) {
      errorMap[key] = error;
      errorCount++
    }
  });
  console.log(errorMap, "err");

  if (Object.keys(errorMap).length != 0) {
    return errorMap;
  } else {
    return false;
  }
};

export const registerWithEmail = async (data: EmailRegisterFormValues) => {
  console.log("validete input");
  const { username, email, password, profilePic } = data;
  try {
    const auth = getAuth();
    const errorCheck = validateInput(data);
    if (errorCheck) {
      return { error: true, errorValues:errorCheck };
    }
    console.log("registerWithEmailAndPassword");
    console.log(username, email, password, profilePic);

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await writeUserData(username, email, user.uid, profilePic);
  } catch (e) {
    const errorCode = e.code;
    const errorMessage = e.message;
    console.error("blad  ", errorCode, errorMessage);
  }
};

export const loginWithEmail = async ({
  email,
  password,
}: EmailLoginFormValues) => {
  console.log("loginWithEmailAndPassword");
  try {
    const auth = getAuth();

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("logged with email");
  } catch (e) {
    const errorCode = e.code;
    const errorMessage = e.message;
    console.error(errorCode, errorMessage);
  }
};
