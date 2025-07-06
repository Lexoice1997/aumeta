interface Props {
  height?: number
  width?: number
  color?: string
}

export const EmailIcon = ({ height=16, width=16, color="#292D32" }: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.333 13.6667H4.66634C2.66634 13.6667 1.33301 12.6667 1.33301 10.3334V5.66671C1.33301 3.33337 2.66634 2.33337 4.66634 2.33337H11.333C13.333 2.33337 14.6663 3.33337 14.6663 5.66671V10.3334C14.6663 12.6667 13.333 13.6667 11.333 13.6667Z" fill="white" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.3337 6L9.24699 7.66667C8.56032 8.21333 7.43366 8.21333 6.74699 7.66667L4.66699 6" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}