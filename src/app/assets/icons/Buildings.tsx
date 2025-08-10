import { IconModel } from "@utils/models/iconModel";

export function BuildingsIcon({ width=40, height=40, className='', color='white' }: IconModel) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1248_2497)">
        <path opacity="0.2" d="M22.499 33.7473V6.24731C22.499 5.91579 22.3673 5.59785 22.1329 5.36343C21.8985 5.12901 21.5805 4.99731 21.249 4.99731H6.24902C5.9175 4.99731 5.59956 5.12901 5.36514 5.36343C5.13072 5.59785 4.99902 5.91579 4.99902 6.24731V33.7473" fill="white"/>
        <path d="M2.5 33.7474H37.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22.499 33.7473V6.24731C22.499 5.91579 22.3673 5.59785 22.1329 5.36343C21.8985 5.12901 21.5805 4.99731 21.249 4.99731H6.24902C5.9175 4.99731 5.59956 5.12901 5.36514 5.36343C5.13072 5.59785 4.99902 5.91579 4.99902 6.24731V33.7473" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M34.999 33.7473V16.2473C34.999 15.9158 34.8673 15.5979 34.6329 15.3634C34.3985 15.129 34.0805 14.9973 33.749 14.9973H22.499" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.99902 11.2473H14.999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.499 21.2474H17.499" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.99902 27.4974H14.999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M27.499 27.4974H29.999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M27.499 21.2474H29.999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_1248_2497">
        <rect width="40" height="40" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}