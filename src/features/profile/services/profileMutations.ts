import { useMutation, useQueryClient } from "@tanstack/react-query";
import { $api } from "@utils/helpers/axiosInstance";
import { ErrorRes, SuccessRes } from "@utils/models/responseModel";
import { UserModel } from "@utils/models/userModel";
import { profileEndpoints } from '../utils/constants/profileEndpoints'
import { profileQueryKeys } from '../utils/constants/profileQueryKeys'
import { showMessage } from "@utils/helpers/showMessage";
import { errorHandler } from "@utils/helpers/errorHandlers";
import { FileModel } from "@utils/models/fileModel";

export const useSetClientInformation = () => {
	const qc = useQueryClient();

	return useMutation<SuccessRes, ErrorRes, UserModel>({
		mutationFn: async (body) => {
			const res = await $api.put(profileEndpoints.CLIENT_INFORMATION, body);
			return res.data;
		},
		onError: errorHandler,
		onSuccess: (res) => {
			qc.invalidateQueries({ queryKey: [profileQueryKeys.CLIENT_PROFILE] });
			showMessage(res.message);
		},
	});
};

export const useSetClientContacts = () => {
	const qc = useQueryClient();

	return useMutation<SuccessRes, ErrorRes, UserModel>({
		mutationFn: async (body) => {
			const res = await $api.put(profileEndpoints.CLIENT_CONTACTS, body);
			return res.data;
		},
		onError: errorHandler,
		onSuccess: (res) => {
			qc.invalidateQueries({ queryKey: [profileQueryKeys.CLIENT_PROFILE] });
			showMessage(res.message);
		},
	});
};

export const useSetClientProfile = () => {
	const qc = useQueryClient();

	return useMutation<SuccessRes, ErrorRes, UserModel>({
		mutationFn: async (body) => {
			const res = await $api.put(profileEndpoints.CLIENT_PROFILE, body);
			return res.data;
		},
		onError: errorHandler,
		onSuccess: (res) => {
			qc.invalidateQueries({ queryKey: [profileQueryKeys.CLIENT_PROFILE] });
			showMessage(res.message);
		},
	});
};

export const useClientFileUpload = () => {
	return useMutation<SuccessRes<FileModel[]>, ErrorRes, File[]>({
		mutationFn: async (body) => {
			const formdata = new FormData()
			body.forEach(b => formdata.append('files', b))
			const res = await $api.post<SuccessRes<FileModel[]>>(profileEndpoints.FILES_CLIENT, formdata);
			return res.data as any;
		},
		onError: errorHandler,
	});
};
// TODO: add input models
// TODO: add i18n
// TODO: i18n models locale