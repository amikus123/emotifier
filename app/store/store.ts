import { Action, combineReducers, configureStore, createStore, ThunkAction } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import themeReducer from './features/theme/themeSlice'
import userReducer from './features/user/userSlice'



export const store = 
 configureStore({
  reducer: {
    theme: themeReducer,
    user:userReducer
  }
})



export default store


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
 >;
