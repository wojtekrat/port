import React from 'react'
import { CiFacebook } from 'react-icons/ci'
import { AiFillGithub } from 'react-icons/ai'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import SocialsIcon from './SocialsIcon'
import Link from 'next/link'

const Socials = () => {
  return (
    <div className='absolute top-1/2 mt-[-100px] left-0 w-14 h-fit z-10'>
        <Link href='https://www.facebook.com/wojciacho.jajczak/'><div className={SocialsIcon({ size: 'md', color: 'primary' })}><CiFacebook/></div></Link>
        <Link href='https://github.com/wojtekrat'><div className={SocialsIcon({ size: 'md', color: 'primary' })}><AiFillGithub/></div></Link>
        <Link href='https://www.linkedin.com/in/wojciechratajczakk/'><div className={SocialsIcon({ size: 'md', color: 'primary' })}><TiSocialLinkedinCircular/></div></Link>
    </div>
  )
}

export default Socials