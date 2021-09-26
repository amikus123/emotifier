import GraphemeSplitter from "grapheme-splitter";
import { checkIfinUse } from "../auth/register";

export const validateUsername = async (username: string) => {
  const splitter = new GraphemeSplitter();
  const arr = splitter.splitGraphemes(username); 

  if (username === "") {
    return "Username can not be empty";
  } else if (arr.length > 5) {
    return "Username is too long";
  } else if (
    false
    // emoji only chjeck
  ) {
    return "Username should only cotnain emojis";
  }
  const inUse = await checkIfinUse(username)
  if(inUse){
    return "Username already in use"
  }
};

export const validateEmail = (email: string) => {
  console.log(email,"emial")
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
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


export const validateText = (username: string) => {
 return false
};

export const validateImages = (arr: string[]) => {
  return false
};