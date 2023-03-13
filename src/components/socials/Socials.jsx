'use client'
import React from 'react'
import { CiFacebook } from 'react-icons/ci'
import { AiFillGithub } from 'react-icons/ai'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import SocialsIcon from './SocialsIcon'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Socials = () => {
  return (
    <motion.div className='w-14 h-fit z-10 flex' animate={{
      x: [-150, 0]
    }} transition={{
      duration: 1
    }} >
        <Link href='https://www.facebook.com/wojciacho.jajczak/'><div className={SocialsIcon({ size: 'md', color: 'primary' })}><CiFacebook/></div></Link>
        <Link href='https://github.com/wojtekrat'><div className={SocialsIcon({ size: 'md', color: 'primary' })}><AiFillGithub/></div></Link>
        <Link href='https://www.linkedin.com/in/wojciechratajczakk/'><div className={SocialsIcon({ size: 'md', color: 'primary' })}><TiSocialLinkedinCircular/></div></Link>
    </motion.div>
  )
}

export default Socials