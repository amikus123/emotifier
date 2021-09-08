import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import themeReducer from './features/theme/themeSlice'
import userReducer from './features/user/userSlice'


const rootReducer = combineReducers({
  theme: themeReducer,
  user:userReducer})

export const store = 
 configureStore({
  reducer: {
    theme: themeReducer,
    user:userReducer
  }
})

export const makeStore = () => createStore(rootReducer)

export const wrapper = createWrapper(makeStore)

export default store

export type RootState = ReturnType<typeof makeStore>
