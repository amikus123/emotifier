import { getAuth } from "firebase/auth";
import { doc,  setDoc } from "firebase/firestore";
import { db } from "../../../pages/_app";
import { addToUsedValues } from "../auth/register";


export const writeUserData = async (
  username: string,
  email: string,
  userId: string,
  profilePic: string
) => {
  const docRef = doc(db, "users", userId);
  try{
  await addToUsedValues(username)
  await setDoc(docRef, {
    username,
    email,
    userId,
    profilePic,
  });
 }catch(e){
console.log(e,"WTF")
 }
};


