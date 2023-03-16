import React from 'react'
import Link from 'next/link'

interface MenuButtonProps {
  link: string;
  text: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ link, text }) => {
  return (
    <Link href={link} className='flex justify-center items-center font-medium text-white active:opacity-80 hover:bg-gradient-to-r from-neutral-500 via-neutral-400 to-neutral-500 hover:rounded-xl h-fit w-fit mt-2 mx-1 p-2'>{text}</Link>
  )
}

export default MenuButton
