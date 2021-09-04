import { createSlice } from "@reduxjs/toolkit";
let theme = "light"
if (typeof window !== "undefined") {

  theme = localStorage.getItem("theme")
  
  }
export const themeReducer = createSlice({
  name: "theme",
  initialState: {
    name: theme
  },
  reducers: {
    toggle: (state) => {
      const newVal = state.name === "dark" ? "light" : "dark";
      localStorage.setItem("theme", "light");

      return { ...state, name: newVal };
    },
    setDark: (state) => {
      localStorage.setItem("theme", "dark");

      return { ...state, name: "dark" };
    },
    setLight: (state) => {
      localStorage.setItem("theme", "light");

      return { ...state, name: "light" };
    },
  },
});

export const { toggle,setDark,setLight } = themeReducer.actions;
export const selectTheme = (state: { theme: { name: string; }; }) =>
  state.theme.name;

export default themeReducer.reducer;
