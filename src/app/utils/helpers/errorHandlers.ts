import { message } from "antd"
import { AxiosError } from "axios"

export const errorHandler = (err: AxiosError<{ message?: { [key: string]: string } }>) => {
  const mes = err?.response?.data?.message?.ru

  if (mes) {
    message.error(mes)
  } else {
    message.error("Xatolik")
  }
}
