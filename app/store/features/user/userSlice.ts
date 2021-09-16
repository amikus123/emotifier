import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DbUser } from "../../../types/db";

const initialState = {
  username: "user",
  email: "emial",
  profilePic: "pic",
  userId: "xd",
} as DbUser;

export const userReducer = createSlice({
  name:"userDbEntry",
  initialState,
  reducers: {
    overWriteData: (state, action: PayloadAction<DbUser>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { overWriteData } = userReducer.actions;

export default userReducer.reducer;
