import {
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { db } from "../../../pages/_app";
import { getUserById } from "../firestoreAccess/user";
import { writeUserData, addEmojiUsername } from "../firestoreWrite/register";


const auth = getAuth();
console.log(auth.currentUser);

// error : error while trying to auth
// logged : user already has an acount
// regitser : creating new acount



export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const accessToken = credential!.accessToken;
    const dbData = await getUserById(user.uid);
    console.log("logged with external");

    if (dbData === null) {
      await writeUserData("", user.email, user.uid,"");
      console.log(auth.currentUser, "registered");
      return "registered";
    } else if (dbData !== null) {
      console.log(auth.currentUser, "logged");
      return "registered";
    } else {
      console.log(auth.currentUser, "toRegister");
      return "toRegister";
    }
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(error);
    return "error";
  }
};

export const loginWithFacebook = async () => {
  const provider = new FacebookAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential!.accessToken;
    const dbData = await getUserById(user.uid);
    console.log("logged with external");
    if (dbData === null) {
      await writeUserData("", user.email, user.uid,"");
      console.log(auth.currentUser, "registered");
      return "registered";
    } else if (dbData !== null) {
      console.log(auth.currentUser, "logged");
      return "logged";
    } else {
      console.log(auth.currentUser, "toRegister");
      return "toRegister";
    }
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = FacebookAuthProvider.credentialFromError(error);
    console.log(error);
    return "error";
  }
};
