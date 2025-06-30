import { useQuery } from "@tanstack/react-query"

import { $api } from "@utils/helpers/axiosInstance"
import { PaginationModel } from "@utils/models/paginationModel"
import { mainEndpoints } from "../utils/constants/mainEndpoints"
import { mainQueryKeys } from "../utils/constants/mainQueryKeys"
import { JobCategoryModel } from "../utils/models/jobCategoryModel"

export const useGetJobCategories = (enabled?: boolean) => {
  return useQuery<PaginationModel<JobCategoryModel>>({
    queryKey: [mainQueryKeys.JOB_CATEGORY],
    queryFn: async () => {
      const res = await $api.get(mainEndpoints.JOB_CATEGORY, { params: { page: 1, size: 30 } })
      return res?.data?.data
    },
    enabled,
  })
}

export const useGetIndustriesAll = () => {
  return useQuery<PaginationModel<JobCategoryModel>>({
    queryKey: [mainQueryKeys.INDUSTRIES_ALL],
    queryFn: async () => {
      const res = await $api.get(mainEndpoints.INDUSTRIES_ALL, { params: { page: 1, size: 30 } })
      return res?.data?.data
    },
  })
}
