exports.id = 417;
exports.ids = [417];
exports.modules = {

/***/ 5620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ EmojiInput_EmojiInput)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "emoji-mart"
var external_emoji_mart_ = __webpack_require__(4854);
;// CONCATENATED MODULE: ./app/components/elements/EmojiDisplay/EmojiInput/PureEmojiInput.tsx




const PureEmojiInput = ({
  text,
  setText,
  abs = false
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(external_emoji_mart_.Picker, {
    style: abs ? {
      width: "100%",
      position: "absolute",
      zIndex: 400,
      top: "56px",
      left: 0
    } : {
      width: "100%"
    },
    set: "twitter",
    title: "Select emoji",
    onClick: e => {
      if (e.native !== undefined) {
        setText(text + e.native);
      }
    }
  });
};

/* harmony default export */ const EmojiInput_PureEmojiInput = (PureEmojiInput);
;// CONCATENATED MODULE: ./app/utils/forms/emojiInputs.ts
const allowDeletesGenerator = setText => {
  const res = e => {
    try {
      // allows ony delete and backspace
      if (e.nativeEvent.inputType === "deleteContentBackward" || e.nativeEvent.inputType === "deleteContentBackward") {
        setText(e.target.value);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return res;
};
;// CONCATENATED MODULE: ./app/utils/general/stringManipulation.ts
const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
;// CONCATENATED MODULE: ./app/components/elements/Inputs/EmojiInput/EmojiInput.tsx








function useOutsideAlerter(ref, toggle) {
  (0,external_react_.useEffect)(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log("You clicked outside of me!");
        toggle(false);
      }
    } // Bind the event listener


    document.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, toggle]);
}

const EmojiInput = ({
  setText,
  text,
  abs = false,
  children = null,
  label = ""
}) => {
  const {
    0: showEmojiPicker,
    1: setShowEmojiPicker
  } = (0,external_react_.useState)(false);
  const x = (0,external_react_.useRef)(null);
  const useStyles = (0,core_.makeStyles)(theme => (0,core_.createStyles)({
    root: {
      position: "relative",
      "& >*": {
        width: "100%"
      }
    }
  }));
  const classes = useStyles();
  useOutsideAlerter(x, setShowEmojiPicker);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
    item: true,
    ref: x,
    onFocus: () => {
      console.log(x.current.contains(document.activeElement), 2);
      setShowEmojiPicker(true);
    },
    className: classes.root,
    children: [children === null ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.FormControl, {
      variant: "filled",
      children: [label !== "" ? /*#__PURE__*/jsx_runtime_.jsx(core_.InputLabel, {
        htmlFor: "filled-adornment-password",
        children: capitalize(label)
      }) : null, /*#__PURE__*/jsx_runtime_.jsx(core_.FilledInput, {
        inputProps: {
          autocomplete: "off"
        },
        name: label,
        type: "text",
        value: text,
        onChange: allowDeletesGenerator(setText)
      })]
    }) : children, showEmojiPicker ? /*#__PURE__*/jsx_runtime_.jsx(EmojiInput_PureEmojiInput, {
      text: text,
      setText: setText,
      abs: abs
    }) : null]
  });
};

/* harmony default export */ const EmojiInput_EmojiInput = (EmojiInput);

/***/ }),

/***/ 5932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _LogoImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8308);






const fontSize = {
  lg: "4.5rem",
  md: "2.25rem",
  sm: "1.5rem",
  inherit: "inherit"
};

const Logo = ({
  className = "",
  size = "lg",
  round = false,
  image = true
}) => {
  const useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(theme => (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.createStyles)({
    text: {
      fontSize: "inherit",
      fontFamily: "Expletus Sans",
      position: "relative",
      width: "fit-content",
      display: "flex",
      cursor: "pointer"
    },
    container: {
      fontSize: fontSize[size],
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    }
  }));
  const classes = useStyles();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: "#",
    passHref: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: `${classes.container} ${className}`,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
        className: `${classes.text} `,
        children: "Emojifier "
      }), image ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LogoImage__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        size: "inherit",
        withText: true,
        round: round
      }) : null]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);

/***/ }),

/***/ 8308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);





const fontSize = {
  lg: "4.5rem",
  md: "2.25rem",
  sm: "1.5rem",
  inherit: "inherit"
};

const LogoImage = ({
  link = false,
  className = "",
  size = "lg",
  withText = false,
  round = false
}) => {
  const useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(theme => // deafault
  (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.createStyles)({
    div: {
      width: `1em`,
      height: `1em`,
      position: "relative",
      display: "inline-block",
      marginLeft: "0.25rem",
      marginTop: withText ? `calc(-1em /3)` : `0`,
      fontSize: fontSize[size]
    },
    round: {
      borderRadius: "50%",
      backgroundColor: "white"
    }
  }));
  const classes = useStyles();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: link ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
      alt: "Rainbow",
      src: "./rainbowLogo.png",
      variant: "square",
      className: `${classes.div} ${className} ${round ? classes.round : ""}`
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
      href: "#",
      passHref: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
        alt: "Rainbow",
        src: "./rainbowLogo.png",
        variant: "square",
        className: `${classes.div} ${className} ${round ? classes.round : ""}`
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogoImage);

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;