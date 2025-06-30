import { useMutation, useQueryClient } from "@tanstack/react-query"

import { appEndpoints } from "@utils/constants/appEndpoints"
import { $api } from "@utils/helpers/axiosInstance"
import { errorHandler } from "@utils/helpers/errorHandlers"
import { ErrorRes, SuccessRes } from "@utils/models/responseModel"

export const useLogOut = () => {
  const qc = useQueryClient()

  return useMutation<SuccessRes, ErrorRes>({
    mutationFn: async () => {
      const res = await $api.get(appEndpoints.LOG_OUT)
      return res.data
    },
    onError: errorHandler,
    onSuccess: () => {
      qc.clear()
    },
  })
}
