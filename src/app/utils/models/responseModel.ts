import { AxiosError } from "axios"

export type SuccessRes<T = void> = {
  data: T
  message: { [key: string]: string }
  accept: boolean
  errors: []
}

export type ErrorRes = AxiosError<{
  data: null
  message: { [key: string]: string }
  accept: boolean
  errors: []
}>
