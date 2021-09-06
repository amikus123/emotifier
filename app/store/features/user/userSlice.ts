import { createSlice,PayloadAction  } from "@reduxjs/toolkit";
import { DbUser } from "../../../types/db";


const initialState = { username: "none",email:"none",userId:"none" } as DbUser


export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
 
 
    overWriteData:(state,action: PayloadAction<DbUser>)=>{
      return { ...state, ...action.payload };

    }
  },
});

export const {overWriteData } = userReducer.actions;


export default userReducer.reducer;
