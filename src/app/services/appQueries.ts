import { useQuery } from '@tanstack/react-query'

import { appEndpoints } from '@utils/constants/appEndpoints'
import { appQueryKeys } from '@utils/constants/appQueryKeys'
import { $api } from '@utils/helpers/axiosInstance'
import { CityModel } from '@utils/models/cityModel'
import { CountryModel } from '@utils/models/countryModel'
import { IndustryModel } from '@utils/models/industryModel'
import { MultiLangModel } from '@utils/models/multiLangModel'
import { PaginationModel } from '@utils/models/paginationModel'
import { RegionModel } from '@utils/models/regionModel'

export const useGetIndustries = (enabled?: boolean) => {
	return useQuery<PaginationModel<IndustryModel>>({
		queryKey: [appQueryKeys.INDUSTRIES],
		queryFn: async () => {
			const res = await $api.get(appEndpoints.INDUSTRIES)
			return res?.data?.data
		},
		enabled,
	})
}

export const useGetPublicIndustries = () => {
	return useQuery<PaginationModel<IndustryModel>>({
		queryKey: [appQueryKeys.PUBLIC_INDUSTRIES],
		queryFn: async () => {
			const res = await $api.get(appEndpoints.PUBLIC_INDUSTRIES)
			return res?.data?.data
		},
	})
}

export const useGetTimeZones = () => {
	return useQuery<string[]>({
		queryKey: [appQueryKeys.TIME_ZONES],
		queryFn: async () => {
			const res = await $api.get(appEndpoints.TIME_ZONES)
			return res?.data?.data
		},
	})
}

export const useGetCountries = (enabled?: boolean) => {
	return useQuery<CountryModel[]>({
		queryKey: [appQueryKeys.COUNTRIES],
		queryFn: async () => {
			const res = await $api.get(appEndpoints.COUNTRIES)
			return res?.data?.data
		},
		enabled,
	})
}

export const useGetRegions = (countryId?: number) => {
	return useQuery<RegionModel[]>({
		queryKey: [appQueryKeys.COUNTRIES, { countryId }],
		queryFn: async () => {
			const res = await $api.get(`${appEndpoints.REGIONS}/${countryId}`)
			return res?.data?.data
		},
		enabled: !!countryId,
	})
}

export const useGetCities = (regionId?: number) => {
	return useQuery<CityModel[]>({
		queryKey: [appQueryKeys.CITIES, { regionId }],
		queryFn: async () => {
			const res = await $api.get(`${appEndpoints.CITIES}/${regionId}`)
			return res?.data?.data
		},
		enabled: !!regionId,
	})
}

export const useGetJobType = (enabled?: boolean) => {
	return useQuery<MultiLangModel[]>({
		queryKey: [appQueryKeys.JOB_TYPE],
		queryFn: async () => {
			const res = await $api.get(appEndpoints.JOB_TYPE)
			return res?.data?.data
		},
		enabled,
	})
}

export const useGetJobGraphic = (enabled?: boolean) => {
	return useQuery<MultiLangModel[]>({
		queryKey: [appQueryKeys.JOB_GRAPHIC],
		queryFn: async () => {
			const res = await $api.get(appEndpoints.JOB_GRAPHIC)
			return res?.data?.data
		},
		enabled,
	})
}
