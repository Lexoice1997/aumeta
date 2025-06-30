import { useMutation } from "@tanstack/react-query"
import { message } from "antd"

import { $api } from "@utils/helpers/axiosInstance"
import { errorHandler } from "@utils/helpers/errorHandlers"
import { showMessage } from "@utils/helpers/showMessage"
import { CurrentUserModel } from "@utils/models/currentUserModel"
import { ErrorRes, SuccessRes } from "@utils/models/responseModel"
import { authEndpoints } from "../utils/constants/authEndpoints"
import { SignInBodyModel } from "../utils/models/signInBodyModel"
import { SignUpBodyModel } from "../utils/models/signUpBodyModel"

export const useSignIn = () => {
  return useMutation<SuccessRes<CurrentUserModel>, ErrorRes, SignInBodyModel>({
    mutationFn: async (req) => {
      const res = await $api.post(authEndpoints.SIGN_IN, req)
      return res.data
    },
    onError: errorHandler,
    onSuccess: (res) => {
      if (!res.accept) {
        message.error(res.message.uz)
      }
    },
  })
}

export const useRefresh = () => {
  return useMutation<SuccessRes, ErrorRes>({
    mutationFn: async () => {
      const res = await $api.get(authEndpoints.REFRESH)
      return res.data
    },
    onError: errorHandler,
  })
}

export const useSendCode = () => {
  return useMutation<SuccessRes, ErrorRes, { username: string; email: string }>({
    mutationFn: async (req) => {
      const res = await $api.get(authEndpoints.SEND_CODE(req))
      return res.data
    },
    onSuccess: (res) => {
      showMessage(res.message)
    },
    onError: errorHandler,
  })
}

export const useCheckCode = () => {
  return useMutation<SuccessRes, ErrorRes, { username: string; code: string }>({
    mutationFn: async (req) => {
      const res = await $api.get(authEndpoints.CHECK_CODE(req))
      return res.data
    },
    onSuccess: (res) => {
      showMessage(res.message)
    },
    onError: errorHandler,
  })
}

export const useReSendCode = () => {
  return useMutation<SuccessRes, ErrorRes, { username: string }>({
    mutationFn: async (req) => {
      const res = await $api.get(authEndpoints.RESEND_CODE(req))
      return res.data
    },
    onSuccess: (res) => {
      showMessage(res.message)
    },
    onError: errorHandler,
  })
}

export const useResetPassword = () => {
  return useMutation<SuccessRes, ErrorRes, { username: string; password: string }>({
    mutationFn: async (req) => {
      const res = await $api.get(authEndpoints.RESET_PASSWORD(req))
      return res.data
    },
    onSuccess: (res) => {
      showMessage(res.message)
    },
    onError: errorHandler,
  })
}

export const useCheckEmail = () => {
  return useMutation<SuccessRes, ErrorRes, { email: string }>({
    mutationFn: async (req) => {
      const res = await $api.put(authEndpoints.CHECK_EMAIL, {}, { params: req })
      return res.data
    },
    onSuccess: (res) => {
      showMessage(res.message)
    },
    onError: errorHandler,
  })
}

export const useCheckVerifyEmailCode = () => {
  return useMutation<SuccessRes, ErrorRes, { email: string; code: string }>({
    mutationFn: async (req) => {
      const res = await $api.put(authEndpoints.CHECK_VERIFY_EMAIL_CODE, {}, { params: req })
      return res.data
    },
    onSuccess: (res) => {
      showMessage(res.message)
    },
    onError: errorHandler,
  })
}

export const useSignUp = () => {
  return useMutation<SuccessRes, ErrorRes, SignUpBodyModel>({
    mutationFn: async (req) => {
      const res = await $api.post(authEndpoints.SIGN_UP, req)
      return res.data
    },
    onSuccess: (res) => {
      showMessage(res.message)
    },
    onError: errorHandler,
  })
}
