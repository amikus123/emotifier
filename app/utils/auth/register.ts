import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  EmailLoginFormValues,
  EmailRegisterFormValues,
} from "../../types/auth";
import { addEmojiUsername, writeUserData } from "../firestoreWrite/register";

// EmailRegisterFormValues
export const registerWithEmail = async ({
  username,
  email,
  password,
  profilePic
}: EmailRegisterFormValues) => {
  try {
    const auth = getAuth();

    console.log("registerWithEmailAndPassword");
    console.log(  username,
      email,
      password,
      profilePic);
    
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await writeUserData(username, email, user.uid,profilePic);
    console.log(user, "udalo sie");
  } catch (e) {
    const errorCode = e.code;
    const errorMessage = e.message;
    console.error(errorCode, errorMessage);
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
    console.log("logged with email")
  } catch (e) {
    const errorCode = e.code;
    const errorMessage = e.message;
    console.error(errorCode, errorMessage);
  }
};
