import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { appReducer } from "@slices/appSlice"
import { userReducer } from "@slices/userSlice"
import { mainReducer } from "../../../features/main/slices/mainSlice"
import { profileReducer } from "../../../features/profile/slices/profileSlice"

const reducers = combineReducers({
  app: appReducer,
  user: userReducer,
  main: mainReducer,
  profile: profileReducer
})

export const store = configureStore({
  reducer: reducers,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
