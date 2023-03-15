import React from 'react'
import Link from 'next/link'

// eslint-disable-next-line react/prop-types
const SocialsIcon = ({ link, icon }) => {
  return (
    <Link href={link} className='text-4xl align-center justify-center text-white p-2 hover:bg-green-800 cursor-pointer'>{icon}</Link>
  )
}

export default SocialsIcon
