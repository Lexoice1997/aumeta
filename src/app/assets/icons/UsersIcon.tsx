interface Props {
  height?: number
  width?: number
  color?: string
}

export const UsersIcon = ({ height=24, width=24, color="black" }: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.0001 7.16C17.9401 7.15 17.8701 7.15 17.8101 7.16C16.4301 7.11 15.3301 5.98 15.3301 4.58C15.3301 3.15 16.4801 2 17.9101 2C19.3401 2 20.4901 3.16 20.4901 4.58C20.4801 5.98 19.3801 7.11 18.0001 7.16Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.9704 14.44C18.3404 14.67 19.8504 14.43 20.9104 13.72C22.3204 12.78 22.3204 11.24 20.9104 10.3C19.8404 9.59004 18.3104 9.35003 16.9404 9.59003" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.97047 7.16C6.03047 7.15 6.10047 7.15 6.16047 7.16C7.54047 7.11 8.64047 5.98 8.64047 4.58C8.64047 3.15 7.49047 2 6.06047 2C4.63047 2 3.48047 3.16 3.48047 4.58C3.49047 5.98 4.59047 7.11 5.97047 7.16Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.00043 14.44C5.63043 14.67 4.12043 14.43 3.06043 13.72C1.65043 12.78 1.65043 11.24 3.06043 10.3C4.13043 9.59004 5.66043 9.35003 7.03043 9.59003" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.0001 14.63C11.9401 14.62 11.8701 14.62 11.8101 14.63C10.4301 14.58 9.33008 13.45 9.33008 12.05C9.33008 10.62 10.4801 9.46997 11.9101 9.46997C13.3401 9.46997 14.4901 10.63 14.4901 12.05C14.4801 13.45 13.3801 14.59 12.0001 14.63Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.08973 17.78C7.67973 18.72 7.67973 20.26 9.08973 21.2C10.6897 22.27 13.3097 22.27 14.9097 21.2C16.3197 20.26 16.3197 18.72 14.9097 17.78C13.3197 16.72 10.6897 16.72 9.08973 17.78Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}