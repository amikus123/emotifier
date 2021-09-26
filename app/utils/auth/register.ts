import { doc, getDoc, updateDoc,setDoc } from "firebase/firestore";
import { db } from "../../../pages/_app";

// EmailRegisterFormValues

type Values = "usernames" | "postNames";

export const addToUsedValues = async (
  text: string,
) => {
  // marks name as used
  const docRef = doc(db, `usedNames`, text);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("didint add");
    return false;
  } else {
    await setDoc(docRef, {
      [text]: text,
    });
    console.log("added");
    return true;
  }
};
export const checkIfinUse = async (
  text: string,
) => {
  // marks name as used
  const docRef = doc(db, `usedNames`, text);
  const docSnap = await getDoc(docRef);
  console.log("snap",docSnap);
  if (docSnap.exists()) {
    return true;
  } else {
    return false;
  }
};

// functions check passed input
// and return errror message realted to the error
// otherwise they return false
