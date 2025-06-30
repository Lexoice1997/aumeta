import { statuses } from "@utils/enums/statuses"
import { MultiLangModel } from "./multiLangModel"

export type UserModel = {
  id: number
  fullName: string
  username: string
  phone: string
  email: string
  status: statuses
  avatar: string
  role: MultiLangModel
}
