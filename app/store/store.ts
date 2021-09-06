import { configureStore } from '@reduxjs/toolkit'

import themeReducer from './features/theme/themeSlice'
import userReducer from './features/user/userSlice'

const store = configureStore({
  reducer: {
    theme: themeReducer,
    user:userReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
