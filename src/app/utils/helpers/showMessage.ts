import { message } from "antd"

export const showMessage = (sms: { [key: string]: string }) => {
  message.success(sms["ru"])
}
