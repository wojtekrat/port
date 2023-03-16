import React from 'react'
import Link from 'next/link'

// eslint-disable-next-line react/prop-types
const MenuButton = ({ link, text }) => {
  return (
  <Link href={link} className='flex justify-center items-center font-medium text-white active:opacity-80 hover:bg-gradient-to-r from-neutral-500 via-neutral-400 to-neutral-500 hover:rounded-xl h-10 mt-2 mx-1 p-2'>{text}</Link>
  )
}

export default MenuButton
