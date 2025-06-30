import { FC } from "react"

type Props = {
  background?: string
  color?: string
  width?: number
  height?: number
}

export const CheckIcon: FC<Props> = ({ background, color, width, height }) => {
  return (
    <svg style={{ background }} width={width ?? "16"} height={height ?? "16"} viewBox='0 0 16 16' fill='none'>
      <path
        d='M13.3332 4L5.99984 11.3333L2.6665 8'
        stroke={color ?? "#12B76A"}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
