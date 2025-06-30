import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { localStorageKeys } from "@utils/constants/localStorageKeys"
import { sliceNames } from "@utils/constants/sliceNames"
import { LocalStorage } from "@utils/helpers/localStorage"

const initialState: {
  refreshPasswordModalData: {
    visible: boolean
    endpoint?: string
  }
  sidebar: {
    collapsible?: boolean
    collapsed?: boolean
  }
  profileModal: boolean
  userPasswordModal: boolean
  deleteConfirmModalVisible: boolean
  isNeedNavbar: boolean
} = {
  refreshPasswordModalData: { visible: false },
  sidebar: { collapsible: false, collapsed: true },
  profileModal: false,
  userPasswordModal: false,
  deleteConfirmModalVisible: false,
  isNeedNavbar: false,
}

const appSlice = createSlice({
  name: sliceNames.APP,
  initialState,
  reducers: {
    setRefreshPasswordModalData: (
      state,
      action: PayloadAction<{
        visible: boolean
        endpoint?: string
      }>
    ) => {
      state.refreshPasswordModalData = action.payload
    },
    setSidebar: (state, action: PayloadAction<{ collapsible?: boolean; collapsed?: boolean }>) => {
      state.sidebar = { ...state.sidebar, ...action.payload }
      LocalStorage.set(localStorageKeys.SIDEBAR, action.payload)
    },
    setProfileModal: (state, action: PayloadAction<boolean>) => {
      state.profileModal = action.payload
    },
    setUserPasswordModal: (state, action: PayloadAction<boolean>) => {
      state.userPasswordModal = action.payload
    },
    deleteConfirmModalVisible: (state, action: PayloadAction<boolean>) => {
      state.deleteConfirmModalVisible = action.payload
    },
    setIsNeedNavbar: (state, action: PayloadAction<boolean>) => {
      state.isNeedNavbar = action.payload
    },
  },
})

export const {
  setRefreshPasswordModalData,
  setSidebar,
  setProfileModal,
  setUserPasswordModal,
  deleteConfirmModalVisible,
  setIsNeedNavbar,
} = appSlice.actions
export const appReducer = appSlice.reducer
