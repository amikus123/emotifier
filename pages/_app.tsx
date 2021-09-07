import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { Provider, useSelector } from "react-redux";
import store from "../app/store/store";
import { getFirestore } from "firebase/firestore";
import { getThemeFromString } from "../app/constans/themeConfig";
import { selectTheme } from "../app/store/features/theme/themeSlice";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
// pollyfill for replace all string method
import replaceAllInserter from "string.prototype.replaceall";
// alows for stacking snackabrs
import { SnackbarProvider } from "notistack";

import { setTheme } from "../app/utils/theme/setTheme";
// css for emoji mart emoji picker
import "emoji-mart/css/emoji-mart.css";
import {
  shouldRedirectLogged,
  useRedirectUserIfNecessary,
} from "../app/hooks/redirecting";
import { useRouter } from "next/router";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
  signOut,
} from "firebase/auth";

import "../style.css"
import { useChangeUserStoreData } from "../app/hooks/authChange";

const firebaseConfig = {
  apiKey: "AIzaSyCTrM0_9ApX9TZiSgdevPgm8UyWvVG1dzA",
  authDomain: "emotifier.firebaseapp.com",
  databaseURL:
    "https://emotifier-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "emotifier",
  storageBucket: "emotifier.appspot.com",
  messagingSenderId: "216637288096",
  appId: "1:216637288096:web:f263e23abe2745747223c5",
  measurementId: "G-9GMXMHHG31",
};

// initialization of firebase, prevents bug when firebase
// has already been declared
try {
  const firebaseApp = initializeApp(firebaseConfig);
} catch (err) {
  console.error("Fireabse initialization error: ", err);
}
export const db = getFirestore();

function MyApp({ Component, pageProps }: AppProps) {
  // prevents flickering, might remove it
  // enable for production, forces user to input his name if it missing
  const router = useRouter();
  useEffect(() => {
    // setIsMounted(true);
    replaceAllInserter.shim();
    setTheme();
  }, []);

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  
  const InnerContent = () => {
    const [theme, setTheme] = useState(getThemeFromString("light"));
    const themeString = useSelector(selectTheme);
    // this should be enabled for production, forces user to redirect
    // useRedirectUserIfNecessary()
    // useEffect(() => {
    //   setTheme({ ...theme, ...getThemeFromString(themeString) });
    // }, [themeString]);
    
    // useChangeUserStoreData()
    const auth = getAuth();

  

    useEffect(() => {
      const init = async () => {
        try {
          await setPersistence(auth, browserLocalPersistence);
          console.log("persistance set")
          console.log(auth.currentUser, "user")
        } catch (err) {
          console.error("Auth initialization error: ", err);
        }
      };
      init();
    }, [auth]);

    return (
      <>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
          charSet="utf-8"
        />
        <ThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={5}>
            <CssBaseline />
            <Component {...pageProps} />
            {/* <button style={{position:"absolute",zIndex:10000,}} onClick={()=>{signOut(auth)}}>log out</button> */}

          </SnackbarProvider>
        </ThemeProvider>
      </>
    );
  };

  return (
    <Provider store={store}>
            <InnerContent />
    </Provider>
  );
}
export default MyApp;

// import { useSnackbar } from 'notistack';

// const MyButton = () => {
//     const { enqueueSnackbar, closeSnackbar } = useSnackbar();

//     const handleClick = () => {
//         enqueueSnackbar('I love hooks');
//     };

//     return (
//         <Button onClick={handleClick}>Show snackbar</Button>
//     );
// }
