export type ClientModel = {
  id: number
  name: string
  industry: {
    id: number,
    name: {
      default: string
      uz: string
      ru: string
      en: string
      kr: string
    },
    status: string
  },
  services: [
    {
      id: number
      name: {
        default: string
        uz: string
        ru: string
        en: string
        kr: string
      },
      status: string
    },
  ],
  companySize: {
    default: string
    uz: string
    ru: string
    en: string
    kr: string
  },
  workHours: string
  information: string
  website: string
  email: string
  phone: string
  country: {
    id: number
    name: {
      default: string
      uz: string
      ru: string
      en: string
      kr: string
    },
    flagPng: string
    flagSvg: string
    coatOfArmsPng: string
    coatOfArmsSvg: string
  },
  region: {
    id: number
    name: {
      default: string
      uz: string
      ru: string
      en: string
      kr: string
    },
    countryId: number
  },
  city: string
  address: string
  avatar: {
    id: number
    originalName: string
    absolutePath: string
    type: string
    format: string
    size: number
    contentType: string
    thumbAbsolutePath: string
    smallestAbsolutePath: string
  },
};
