import { message } from "antd"

import { useMutation } from "@tanstack/react-query"
import { $api } from "@utils/helpers/axiosInstance"
import { errorHandler } from "@utils/helpers/errorHandlers"
import { ErrorRes, SuccessRes } from "@utils/models/responseModel"
import { mainEndpoints } from "../utils/constants/mainEndpoints"
import { WorkModelReqModel } from "../utils/models/workModelReqModel"

export const useCreateWorkMode = () => {
  return useMutation<SuccessRes, ErrorRes, WorkModelReqModel>({
    mutationFn: async (req) => {
      const res = await $api.post(mainEndpoints.WORK_MODE, req)
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
