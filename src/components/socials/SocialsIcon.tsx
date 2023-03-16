import React, { ReactElement, FC } from 'react'
import Link from 'next/link'
import { IconType } from 'react-icons'

interface Props {
  link: string;
  icon: ReactElement<IconType>;
}

const SocialsIcon: FC<Props> = ({ link, icon }) => {
  return (
    <Link href={link} legacyBehavior>
      <a className='text-4xl align-center justify-center text-white p-2 hover:bg-green-800 cursor-pointer'>
        {icon}
      </a>
    </Link>
  )
}

export default SocialsIcon
