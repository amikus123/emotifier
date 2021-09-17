
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../pages/_app";

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



// functions check passed input
// and return errror message realted to the error
// otherwise they return false
