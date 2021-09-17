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
import { writeUserData } from "../firestoreWrite/user";
import GraphemeSplitter from "grapheme-splitter";

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
  const splitter = new GraphemeSplitter();
  const arr = splitter.splitGraphemes(username); // returns ["🌷","🎁","💩","😜","👍","🏳️‍🌈"]

  if (username === "") {
    return "Username can not be empty";
  } else if (arr.length > 3) {
    return "Username is too long";
  } else if (
    false
    // emoji only chjeck
  ) {
    return "USername should only cotnain emojis";
  } else {
    return false;
  }
};

export const validateEmail = (email: string) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
  console.log("validateEmail");
  if (email === "") {
    return "Email can not be empty";
  } else if (email.length > 30) {
    return "Email is too long";
  } else if (!emailRegex.test(email)) {
    return "This email is not valid";
  } else {
    return false;
  }
};
export const validatePassword = (password: string) => {
  const passwordRegex = /^(?=.*\d)$/;
  if (password === "") {
    return "Password can not be empty";
  } else if (password.length < 6) {
    return "Password is too short";
  } else {
    return false;
  }
};
export const validateProfilePic = (emoji: string) => {
  // TO DO
  return false;
};

const functionToKey = {
  username: validateUsername,
  email: validateEmail,
  password: validatePassword,
  profilePic: validateProfilePic,
};

interface errorData {
  username: string;
  email: string;
  password: string;
  profilePic: string;
}

export const validateInput = (data: EmailRegisterFormValues,errorValues:errorData) => {

  let errorCount = 0;
  Object.keys(data).forEach((key) => {
    const error = functionToKey[key](data[key]);
    if (error) {
      errorValues[key] = error;
      errorCount++;
    }
  });

  if (errorCount != 0) {
    return {
      error:true,
      errorValues,
    };
  } else {
    return {
      error:false,
      errorValues,
    }
  }
};

export const registerWithEmail = async (data: EmailRegisterFormValues) => {
  console.log("registerWithEmail");

  const errorCheck :errorData = {
    username:"",
    email:"",
    password:"",
    profilePic:"",
  }
  const { username, email, password, profilePic } = data;
  try {
    const errorWrapper = validateInput(data,errorCheck);
    const auth = getAuth();
    console.log(errorCheck, "XD");
    if (errorWrapper.error) {
      return errorWrapper
    }

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    
    await writeUserData(username, email, user.uid, profilePic);
    return errorWrapper
  } catch (e) {
    const errorCode = e.code;
    const errorMessage = e.message;
    errorCheck.email = errorMessage;
    console.error("blad  ", errorCheck);
    return { error: true, errorValues:errorCheck };
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
