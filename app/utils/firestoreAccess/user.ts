import { doc, getDoc} from "firebase/firestore";
import { db } from "../../../pages/_app";
import { DbUser } from "../../types/db";

type GetDocRes = DbUser | null;

export const getUserById = async (id: string): Promise<GetDocRes> => {
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = <DbUser>docSnap.data();
    // check if has properties
    console.log("Document data:", docSnap.data());
    return data;
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    return null;
  }
};
