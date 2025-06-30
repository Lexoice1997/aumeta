import { Spin } from "antd"
import { FC } from "react"

import { ChevronDownIcon } from "@assets/icons/ChevronDownIcon"
import { SpinIndicator } from "@components/spin-indicator/SpinIndicator"

type Props = {
  isLoading?: boolean
  className?: string
}

export const SelectSuffix: FC<Props> = ({ isLoading = false, className }) => {
  return isLoading ? (
    <Spin spinning={true} indicator={<SpinIndicator size={16} />} />
  ) : (
    <ChevronDownIcon className={className} />
  )
}
