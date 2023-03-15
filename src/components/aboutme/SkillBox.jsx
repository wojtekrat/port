'use client'

import React from 'react'
import { urlFor } from '../../lib/client'
import Image from 'next/image'
import { motion } from 'framer-motion'

// eslint-disable-next-line react/prop-types
const SkillBox = ({ skills: { skillimage } }) => {
  const randomInt = (x) => {
    return Math.floor(Math.random() * x)
  }
  return (
    <div className='p-5 sm:h-[150px] sm:w-[150px] bg-neutral-800 m-[5px] rounded-2xl'>
      <motion.div animate={{
        opacity: [0, 1],
        y: [randomInt(300), 0],
        x: [randomInt(300), 0]
      }}
      transition={{
        duration: 1,
        delay: 1
      }}
        className='p-1 h-[100px] w-[100px] flex items-center justify-center'>
        <Image width={100} height={100} alt="skill" src={urlFor(skillimage).url()}/>
      </motion.div>
    </div>
  )
}

export default SkillBox
