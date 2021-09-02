"use strict";
exports.id = 819;
exports.ids = [819];
exports.modules = {

/***/ 8433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ getUserById)
/* harmony export */ });
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9714);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5261);


const getUserById = async id => {
  const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_pages_app__WEBPACK_IMPORTED_MODULE_1__.db, "users", id);
  const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc)(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data(); // check if has properties

    console.log("Document data:", docSnap.data());
    return data;
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    return null;
  }
};

/***/ }),

/***/ 5261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "db": () => (/* binding */ db),
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__(9421);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(6139);
;// CONCATENATED MODULE: ./app/store/features/theme/themeSlice.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


let theme = "light";

if (false) {}

const themeReducer = (0,toolkit_.createSlice)({
  name: "theme",
  initialState: {
    name: theme
  },
  reducers: {
    toggle: state => {
      const newVal = state.name === "dark" ? "light" : "dark";
      localStorage.setItem("theme", "light");
      return _objectSpread(_objectSpread({}, state), {}, {
        name: newVal
      });
    },
    setDark: state => {
      localStorage.setItem("theme", "dark");
      return _objectSpread(_objectSpread({}, state), {}, {
        name: "dark"
      });
    },
    setLight: state => {
      localStorage.setItem("theme", "light");
      return _objectSpread(_objectSpread({}, state), {}, {
        name: "light"
      });
    }
  }
});
const {
  toggle,
  setDark,
  setLight
} = themeReducer.actions;
const selectTheme = state => state.theme.name;
/* harmony default export */ const themeSlice = (themeReducer.reducer);
;// CONCATENATED MODULE: ./app/store/store.ts


const store = (0,toolkit_.configureStore)({
  reducer: {
    theme: themeSlice
  }
});
/* harmony default export */ const store_store = (store);
// EXTERNAL MODULE: external "firebase/firestore"
var firestore_ = __webpack_require__(9714);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
;// CONCATENATED MODULE: ./app/constans/themeConfig.ts

const dark = (0,core_.createTheme)({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#0f0a05"
        },
        a: {
          textDecoration: "none",
          color: "#1B95E0"
        }
      }
    }
  },
  palette: {
    primary: {
      main: "#1B95E0"
    },
    secondary: {
      main: "#AA2200"
    },
    neutralColor: {
      main: "#e0e0e0"
    },
    textInputBG: {
      main: "#0f0a05"
    },
    background: {
      paper: "#0f0a05",
      default: "#0f0a05"
    },
    text: {
      primary: "#FFFFFF"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
});
const light = (0,core_.createTheme)({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#ffefff"
        },
        a: {
          textDecoration: "none",
          color: "#AA2200"
        }
      }
    }
  },
  palette: {
    primary: {
      main: "#AA2200"
    },
    secondary: {
      main: "#1B95E0"
    },
    textInputBG: {
      main: "#0f0a05"
    },
    neutralColor: {
      main: "#e0e0e0"
    },
    background: {
      paper: "#fff",
      default: "#fff"
    },
    text: {
      primary: "#0D1821"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  } // e0e0e0

}); // aa2200-ffffff-2b6dad-0d1821-ff9b54

const getThemeFromString = str => {
  return str === "light" ? light : light;
};
// EXTERNAL MODULE: external "string.prototype.replaceall"
var external_string_prototype_replaceall_ = __webpack_require__(6696);
var external_string_prototype_replaceall_default = /*#__PURE__*/__webpack_require__.n(external_string_prototype_replaceall_);
// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__(3308);
;// CONCATENATED MODULE: ./app/utils/theme/setTheme.ts


const setTheme = () => {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  console.log(localStorage.getItem("theme"));

  if (prefersDarkScheme.matches) {
    console.log("dark detected");
    store_store.dispatch(setDark());
  } else {
    console.log("light detected");
    store_store.dispatch(setLight());
  }
};
// EXTERNAL MODULE: external "firebase/auth"
var auth_ = __webpack_require__(5942);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./app/utils/firestoreAccess/user.ts
var firestoreAccess_user = __webpack_require__(8433);
;// CONCATENATED MODULE: ./app/constans/urls.ts
// on certaint paths user may be forced to redirect
// or certain components may not be shown
const notAllowedLogged = ["/", "/auth/register", "/auth/login", "/auth/nick-input"];
const urls_notAllowedAnon = (/* unused pure expression or super */ null && (["/feed"]));
;// CONCATENATED MODULE: ./app/hooks/redirecting.tsx





const shouldRedirectLogged = path => {
  if (notAllowedLogged.indexOf(path) !== -1) {
    return true;
  }

  return false;
};
const shouldRedirectAnon = path => {
  if (notAllowedAnon.indexOf(path) !== -1) {
    return true;
  }

  return false;
};
const useRedirectUserIfNecessary = () => {
  const router = (0,router_.useRouter)();
  const auth = (0,auth_.getAuth)();
  (0,external_react_.useEffect)(() => {
    (0,auth_.onAuthStateChanged)(auth, async user => {
      if (user) {
        const data = await (0,firestoreAccess_user/* getUserById */.G)(user.uid);

        if (data === null) {// ????? shouldn happen but do error
        } else {
          // logged with username
          if (router.pathname === "/") router.push("/feed");
        }
      } else {
        // anon
        if (router.pathname !== "/") {
          router.push("/");
        }

        console.log("not logged");
      }
    });
  });
};
;// CONCATENATED MODULE: ./pages/_app.tsx




function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // pollyfill for replace all string method

 // alows for stacking snackabrs


 // css for emoji mart emoji picker





const firebaseConfig = {
  apiKey: "AIzaSyCTrM0_9ApX9TZiSgdevPgm8UyWvVG1dzA",
  authDomain: "emotifier.firebaseapp.com",
  databaseURL: "https://emotifier-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "emotifier",
  storageBucket: "emotifier.appspot.com",
  messagingSenderId: "216637288096",
  appId: "1:216637288096:web:f263e23abe2745747223c5",
  measurementId: "G-9GMXMHHG31"
}; // initialization of firebase, prevents bug when firebase
// has already been declared

try {
  const firebaseApp = (0,app_.initializeApp)(firebaseConfig);
} catch (err) {
  console.error("Fireabse initialization error: ", err);
}

const db = (0,firestore_.getFirestore)();

function MyApp({
  Component,
  pageProps
}) {
  // prevents flickering, might remove it
  // const [isMounted, setIsMounted] = useState(false);
  // enable for production, forces user to input his name if it missing
  const router = (0,router_.useRouter)();
  (0,external_react_.useEffect)(() => {
    // setIsMounted(true);
    external_string_prototype_replaceall_default().shim();
    setTheme();
  }, []);
  (0,external_react_.useEffect)(() => {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const InnerContent = () => {
    const {
      0: theme,
      1: setTheme
    } = (0,external_react_.useState)(getThemeFromString("light"));
    const themeString = (0,external_react_redux_.useSelector)(selectTheme);
    useRedirectUserIfNecessary();
    (0,external_react_.useEffect)(() => {
      setTheme(_app_objectSpread(_app_objectSpread({}, theme), getThemeFromString(themeString)));
    }, [themeString]);
    const auth = (0,auth_.getAuth)();

    const init = async () => {
      try {
        await (0,auth_.setPersistence)(auth, auth_.browserLocalPersistence);
        console.log("persistance set");
        console.log(auth.currentUser, "user");
      } catch (err) {
        console.error("Auth initialization error: ", err);
      }
    }; // ()


    (0,external_react_.useEffect)(() => {
      init();
    }, []);
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "minimum-scale=1, initial-scale=1, width=device-width",
        charSet: "utf-8"
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.ThemeProvider, {
        theme: theme,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_notistack_.SnackbarProvider, {
          maxSnack: 5,
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.CssBaseline, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx("button", {
            style: {
              position: "absolute",
              zIndex: 10000
            },
            onClick: () => {
              (0,auth_.signOut)(auth);
            },
            children: "log out"
          })]
        })
      })]
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
    store: store_store,
    children: shouldRedirectLogged(router.pathname) ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/jsx_runtime_.jsx(InnerContent, {})
    }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/jsx_runtime_.jsx(InnerContent, {})
    })
  });
}

/* harmony default export */ const _app = (MyApp); // import { useSnackbar } from 'notistack';
// const MyButton = () => {
//     const { enqueueSnackbar, closeSnackbar } = useSnackbar();
//     const handleClick = () => {
//         enqueueSnackbar('I love hooks');
//     };
//     return (
//         <Button onClick={handleClick}>Show snackbar</Button>
//     );
// }

/***/ })

};
;