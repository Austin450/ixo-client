import React from 'react'

const Currency = (props: any): JSX.Element => {
  return (
    <svg
      width={props.width || 9}
      height="15"
      viewBox="0 0 9 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.12784 6.83789L2.96378 5.91211C2.59757 5.80664 2.34268 5.46387 2.34268 5.08301C2.34268 4.60547 2.7294 4.21875 3.20694 4.21875H5.14932C5.50675 4.21875 5.85831 4.32715 6.15128 4.52637C6.32999 4.64648 6.57022 4.61719 6.72257 4.46777L7.7421 3.47168C7.9501 3.26953 7.92081 2.93262 7.68936 2.75391C6.97159 2.19141 6.0751 1.87793 5.15518 1.875V0.46875C5.15518 0.210938 4.94425 0 4.68643 0H3.74893C3.49112 0 3.28018 0.210938 3.28018 0.46875V1.875H3.20694C1.34073 1.875 -0.15927 3.47754 0.0135811 5.37891C0.136628 6.72949 1.16788 7.82813 2.46866 8.20898L5.47159 9.08789C5.8378 9.19629 6.09268 9.53613 6.09268 9.91699C6.09268 10.3945 5.70596 10.7812 5.22843 10.7812H3.28604C2.92862 10.7812 2.57706 10.6729 2.28409 10.4736C2.10538 10.3535 1.86514 10.3828 1.7128 10.5322L0.693269 11.5283C0.485261 11.7305 0.514558 12.0674 0.746003 12.2461C1.46378 12.8086 2.36026 13.1221 3.28018 13.125V14.5312C3.28018 14.7891 3.49112 15 3.74893 15H4.68643C4.94425 15 5.15518 14.7891 5.15518 14.5312V13.1191C6.52042 13.0928 7.80069 12.2812 8.25186 10.9893C8.88175 9.18457 7.82413 7.33301 6.12784 6.83789Z"
        fill={props.fill || '#fff'}
      />
    </svg>
  )
}

export default Currency
