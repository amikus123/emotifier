import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { getUserById } from "../utils/firestoreAccess/user";


export const useRedirectUserIfNecessary = () => {
  const router = useRouter();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const data = await getUserById(user.uid);
        if (data === null) {
          // ????? shouldn happen but do error
      
        } else {
          // logged with username
          if (router.pathname === "/")
            router.push("/feed");
        }

      } else {
        // anon
        if (router.pathname !== "/"){
        router.push("/");
    }
        console.log("not logged");
      
      }
    });
  });
};

