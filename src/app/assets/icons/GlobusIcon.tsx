interface Props {
  height?: number
  width?: number
  color?: string
}

export const GlobusIcon = ({ height=16, width=16, color="#292D32" }: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 8.00004C14.6663 4.31814 11.6816 1.33337 7.99967 1.33337C4.31778 1.33337 1.33301 4.31814 1.33301 8.00004C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z" fill="white" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.33372 2H6.00039C4.70039 5.89333 4.70039 10.1067 6.00039 14H5.33372" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 2C11.3 5.89333 11.3 10.1067 10 14" stroke={color} stroke-linecap="round" strokeLinejoin="round"/>
      <path d="M2 10.6667V10C5.89333 11.3 10.1067 11.3 14 10V10.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 6.00002C5.89333 4.70002 10.1067 4.70002 14 6.00002" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}