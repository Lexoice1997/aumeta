import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

import { AppDispatch, RootState } from "@utils/helpers/store"

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
