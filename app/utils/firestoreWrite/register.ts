// Get a reference to the database service
import { getAuth } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../pages/_app";

// save the user's profile into Firebase so we can list users,
// use them in Security and Firebase Rules, and show profiles


export const writeUserData = async (
  username: string,
  email: string,
  userId: string,
  profilePic: string
) => {
  const docRef = doc(db, "users", userId);
  await setDoc(docRef, {
    username,
    email,
    userId,
    profilePic,
  });
};

export const addEmojiUsername = async (values: {
  username: string;
  profilePic: string;
}) => {
  const { username, profilePic } = values;
  console.log(values, "values");
  const auth = getAuth();
  const userId = auth.currentUser.uid;
  console.log(userId);
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    await updateDoc(docRef, {
      username,
      profilePic,
    });
    console.log("Added nick:", docSnap.data());
  } else {
    console.log("Document does not exist:");
  }
  return "registered";
};
