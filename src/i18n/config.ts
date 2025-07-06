import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { languages } from '../app/utils/enums/languages.ts';
import { LocalStorage } from '../app/utils/helpers/localStorage.ts';
import { localStorageKeys } from '../app/utils/constants/localStorageKeys.ts';

import appUz from './uz/app.json'
import profileUz from './uz/profile.json'
import mainUz from './uz/main.json'
import authUz from './uz/auth.json'

import appEn from './en/app.json'
import profileEn from './en/profile.json'
import mainEn from './en/main.json'
import authEn from './en/auth.json'

import appRu from './ru/app.json'
import profileRu from './ru/profile.json'
import mainRu from './ru/main.json'
import authRu from './ru/auth.json'

import appKr from './kr/app.json'
import profileKr from './kr/profile.json'
import mainKr from './kr/main.json'
import authKr from './kr/auth.json'

i18next
	.use(initReactI18next)
	.init({
		lng: LocalStorage.get(localStorageKeys.LANGUAGE) as string || languages.UZ, // if you're using a language detector, do not define the lng option
		// debug: true,
		resources: {
			uz: {
				app: appUz,
				profile: profileUz,
				main: mainUz,
				auth: authUz,
			},
			en: {
				app: appEn,
				profile: profileEn,
				main: mainEn,
				auth: authEn,
			},
			ru: {
				app: appRu,
				profile: profileRu,
				main: mainRu,
				auth: authRu,
			},
			kr: {
				app: appKr,
				profile: profileKr,
				main: mainKr,
				auth: authKr,
			},
		},
		interpolation: {
			escapeValue: false,
		},
	});


export default i18next;