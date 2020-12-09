import React from 'react'

const Exclamation = (props: any): JSX.Element => {
  return (
    <svg
      width={ props.width || 21 }
      height="22"
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.729 0.601562C5.04731 0.601562 0.501953 5.14692 0.501953 10.8286C0.501953 16.5103 5.04731 21.0557 10.729 21.0557C16.4107 21.0557 20.9561 16.5103 20.9561 10.8286C20.9561 5.14692 16.4107 0.601562 10.729 0.601562ZM10.729 16.5103C10.729 16.5103 10.2745 16.8512 9.93357 16.8512C9.81993 16.8512 9.81993 16.8512 9.7063 16.8512H9.59266C9.0245 16.7376 8.68359 16.1694 8.91086 15.6012L9.7063 12.4195L10.0472 10.9422C10.3881 9.57864 9.0245 11.1695 8.68359 10.6013C8.45633 10.1468 9.7063 9.35137 10.729 8.66957C10.729 8.66957 11.1835 8.32867 11.5244 8.32867C11.6381 8.32867 11.6381 8.32867 11.7517 8.32867H11.8653C12.4335 8.4423 12.7744 9.01047 12.6608 9.57864L11.8653 12.7604L11.5244 14.2376C11.1835 15.6012 12.5471 13.8967 12.888 14.5785C12.888 15.0331 11.6381 15.9421 10.729 16.5103ZM12.6608 6.62416C12.4335 7.4196 11.6381 7.87413 10.8426 7.64686C10.0472 7.4196 9.59266 6.62416 9.7063 5.82872C9.93357 5.03328 10.729 4.57875 11.5244 4.80602C12.4335 5.03328 12.888 5.82872 12.6608 6.62416Z"
        fill={ props.fill || '#00D2FF' }
      />
    </svg>
  )
}

export default Exclamation;