import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { getUserById } from "../utils/firestoreAccess/user";
import { notAllowedLogged, notAllowedAnon } from "../constans/urls";

export const shouldRedirectLogged = (path: string) => {
  if (notAllowedLogged.indexOf(path) !== -1) {
    return true;
  }
  return false;
};

export const shouldRedirectAnon = (path: string) => {
  if (notAllowedAnon.indexOf(path) !== -1) {
    return true;
  }
  return false;
};

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
