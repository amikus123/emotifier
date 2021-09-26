import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../pages/_app";

export const createPost = async () => {};

export const addPostToUser = async (userId: string, postId:string) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    await setDoc(doc(db, "users", userId), {
      posts:{
        [postId]:postId
      }
    },{ merge: true });
    console.log("Added Post to user");
  } else {
    console.error("Document does not exist:");
  }
};
