import { CurrentUserModel } from "@utils/models/currentUserModel.ts"
import { statuses } from "../enums/statuses.ts"
// import { UserModel } from "../models/userModel.ts"

export const currentUserToUser: (user: CurrentUserModel) => any = ({
  id,
  fullName,
  username,
  role,
  phone,
  email,
  avatar,
}) => {
  return {
    id,
    fullName,
    username,
    phone,
    email,
    avatar,
    status: statuses.ENABLED,
    role,
  }
}
