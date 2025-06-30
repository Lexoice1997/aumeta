import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { localStorageKeys } from "@utils/constants/localStorageKeys"
import { sliceNames } from "@utils/constants/sliceNames"
import { LocalStorage } from "@utils/helpers/localStorage"
import { UserModel } from "@utils/models/userModel"

const initialState: {
  isAuth: boolean
  user: UserModel | null
  permissions: string[]
} = {
  isAuth: LocalStorage.get<boolean>(localStorageKeys.IS_AUTH) ?? false,
  user: LocalStorage.get<UserModel>(localStorageKeys.USER),
  permissions: LocalStorage.get<string[]>(localStorageKeys.PERMISSIONS) ?? [],
}

const userSlice = createSlice({
  name: sliceNames.USER,
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      LocalStorage.set(localStorageKeys.IS_AUTH, action.payload)
      state.isAuth = action.payload
    },
    setUser: (state, action: PayloadAction<UserModel>) => {
      LocalStorage.set(localStorageKeys.USER, action.payload)
      state.user = action.payload
    },
    setPermissions: (state, action: PayloadAction<string[]>) => {
      LocalStorage.set(localStorageKeys.PERMISSIONS, action.payload)
      state.permissions = action.payload
    },
  },
})

export const { setIsAuth, setUser, setPermissions } = userSlice.actions
export const userReducer = userSlice.reducer
