import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getUserById } from "../utils/firestoreAccess/user";
import { getThemeFromString } from "../constans/themeConfig";
import { useDispatch, useSelector } from "react-redux";
import { overWriteData } from "../store/features/user/userSlice";

import store from "../store/store";

export const useChangeUserStoreData = () => {
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const data = await getUserById(user.uid);
        if (data !== null) {
          console.log("logged", data);
          store.dispatch(overWriteData(data));

          // setting redux user to db entry
        } else {
          // anon
          // resetting redux user

          console.log("no entry");
        }
      } else {
        console.log("not logged");
      }
    });
  });
};
