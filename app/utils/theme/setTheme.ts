import { useDispatch, useSelector } from "react-redux";
import store from "../../store/store";
import { toggle,setDark,setLight } from "../../store/features/theme/themeSlice";
export const setTheme = () => {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  console.log(localStorage.getItem("theme"));

  if (prefersDarkScheme.matches) {
    console.log("dark detected");
    store.dispatch(setDark());
  } else {
    console.log("light detected");
    store.dispatch(setLight());

  }
};
