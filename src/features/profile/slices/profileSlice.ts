import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { sliceNames } from "@utils/constants/sliceNames"

const initialState: {
  informationModalData: {
    visible: boolean
  },
  profileModalData: {
    visible: boolean
  },
  contactModalData: {
    visible: boolean
  },
} = {
  informationModalData: { visible: false },
  profileModalData: { visible: false },
  contactModalData: { visible: false },
}

const profileSlice = createSlice({
  name: sliceNames.PROFILE,
  initialState,
  reducers: {
    setInformationModalData: (state, action: PayloadAction<{ visible: boolean }>) => {
      state.informationModalData = action.payload
    },
    setProfileModalData: (state, action: PayloadAction<{ visible: boolean }>) => {
      state.profileModalData = action.payload
    },
    setContactModalData: (state, action: PayloadAction<{ visible: boolean }>) => {
      state.contactModalData = action.payload
    },
  },
})

export const {
  setInformationModalData,
  setProfileModalData,
  setContactModalData,
} = profileSlice.actions
export const profileReducer = profileSlice.reducer
