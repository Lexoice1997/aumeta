import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { sliceNames } from "@utils/constants/sliceNames"

const initialState: {
  postModalData: {
    visible: boolean
  }
  postFreelanceModalData: {
    visible: boolean
  }
  postOneTimeModalData: {
    visible: boolean
  }
  postInternshipModalData: {
    visible: boolean
  }
} = {
  postModalData: { visible: false },
  postFreelanceModalData: { visible: false },
  postOneTimeModalData: { visible: false },
  postInternshipModalData: { visible: false },
}

const mainSlice = createSlice({
  name: sliceNames.MAIN,
  initialState,
  reducers: {
    setPostModalData: (state, action: PayloadAction<{ visible: boolean }>) => {
      state.postModalData = action.payload
    },
    setPostFreelanceModalData: (state, action: PayloadAction<{ visible: boolean }>) => {
      state.postFreelanceModalData = action.payload
    },
    setPostOneTimeModalData: (state, action: PayloadAction<{ visible: boolean }>) => {
      state.postOneTimeModalData = action.payload
    },
    setPostInternshipModalData: (state, action: PayloadAction<{ visible: boolean }>) => {
      state.postInternshipModalData = action.payload
    },
  },
})

export const {
  setPostModalData,
  setPostFreelanceModalData,
  setPostOneTimeModalData,
  setPostInternshipModalData,
} = mainSlice.actions
export const mainReducer = mainSlice.reducer
