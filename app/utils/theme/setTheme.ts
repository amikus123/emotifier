import { useDispatch, useSelector } from "react-redux";
import store from "../../store/store";
import { toggle,setDark,setLight } from "../../store/features/theme/themeSlice";
export const setTheme = () => {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  if (prefersDarkScheme.matches) {
    store.dispatch(setDark());
  } else {
    store.dispatch(setLight());

  }
};
