// Get a reference to the database service
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../pages/_app";

// save the user's profile into Firebase so we can list users,
// use them in Security and Firebase Rules, and show profiles

export const writeUserData = async (
  username: string,
  email: string,
  userId: string
) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);


  
    await setDoc(docRef, {
      username,
      email,
      userId,
    });
    

};
export const addEmojiUsername = async (username: string, userId: string) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    await updateDoc(docRef, {
      username,
    });
    console.log("Added nick:", docSnap.data());
  } else {
    console.log("Document does not exist:");
  }
};
