import { LoadingOutlined } from "@ant-design/icons"
import { FC } from "react"

type Props = {
  size?: number
  className?: string
}

export const SpinIndicator: FC<Props> = ({ size = 24, className }) => {
  return <LoadingOutlined className={className} style={{ fontSize: size }} spin />
}
