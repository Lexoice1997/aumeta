import { MultiLangModel } from "./multiLangModel"

export interface CountryModel {
  id: number
  name: MultiLangModel
  flagPng: string
  flagSvg: string
  coatOfArmsPng: string
  coatOfArmsSvg: string
}
