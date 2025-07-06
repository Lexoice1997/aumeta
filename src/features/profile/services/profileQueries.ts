import { profileQueryKeys } from '../utils/constants/profileQueryKeys'
import { profileEndpoints } from '../utils/constants/profileEndpoints'
import { useQuery } from '@tanstack/react-query'
import { $api } from '@utils/helpers/axiosInstance'
import { SuccessRes } from '@utils/models/responseModel'
import { ClientModel } from '../utils/models/clientModel'
import { IndustryModel } from '@utils/models/industryModel'
import { WorkModelReqModel } from 'src/features/main/utils/models/workModelReqModel'

export const useGetClientProfile = () => useQuery<ClientModel>({
  queryKey: [profileQueryKeys.CLIENT_PROFILE],
  queryFn: async () => {
    const { data } = await $api.get<SuccessRes<ClientModel>>(profileEndpoints.CLIENT_PROFILE)
    return data.data
  }
})

export const useGetClientCompanySize = () => useQuery<ClientModel['companySize'][]>({
  queryKey: [profileQueryKeys.CLIENT_COMPANY_SIZE],
  queryFn: async () => {
    const { data } = await $api.get<SuccessRes<ClientModel['companySize'][]>>(profileEndpoints.CLIENT_COMPANY_SIZE)
    return data.data
  }
})

export const useGetServices = () => useQuery<IndustryModel[]>({
  queryKey: [profileQueryKeys.SERVICES_ACTIVE],
  queryFn: async () => {
    const { data } = await $api.get<SuccessRes<IndustryModel[]>>(profileEndpoints.SERVICES_ACTIVE)
    
    return (data.data as any).data
  }
})

export const useGetIndustries = () => useQuery<IndustryModel[]>({
  queryKey: [profileQueryKeys.INDUSTRY_PUBLIC],
  queryFn: async () => {
    const { data } = await $api.get<SuccessRes<IndustryModel[]>>(profileEndpoints.INDUSTRY_PUBLIC)
    return (data.data as any).data
  }
})

export const useGetWorkModes = () => useQuery<WorkModelReqModel[]>({
  queryKey: [profileQueryKeys.WORK_MODE_FILTER],
  queryFn: async () => {
    const { data } = await $api.post<SuccessRes<WorkModelReqModel[]>>(profileEndpoints.WORK_MODE_FILTER, { page: 1, size: 5 })
    return (data.data as any).data
  }
})