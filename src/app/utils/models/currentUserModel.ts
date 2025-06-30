import { MultiLangModel } from "./multiLangModel"

export type CurrentUserModel = {
  id: number
  username: string
  fullName: string
  avatar: string
  phone: string
  email: string
  accessToken: string
  refreshToken: string
  permissions: string[]
  role: {
    id: number
    name: MultiLangModel
  }
  companyId: number
}
