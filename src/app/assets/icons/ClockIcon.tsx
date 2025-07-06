interface Props {
  height?: number
  width?: number
  color?: string
}

export const ClockIcon = ({ height=24, width=24, color="black" }: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.7099 15.18L12.6099 13.33C12.0699 13.01 11.6299 12.24 11.6299 11.61V7.51001" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}