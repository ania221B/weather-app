import React from 'react'

function IconLessInfo ({ hidden = true }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-list-chevrons-down-up-icon lucide-list-chevrons-down-up'
      aria-hidden={hidden ? true : undefined}
    >
      <path d='M3 5h8' />
      <path d='M3 12h8' />
      <path d='M3 19h8' />
      <path d='m15 5 3 3 3-3' />
      <path d='m15 19 3-3 3 3' />
    </svg>
  )
}

export default IconLessInfo
