'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '../../lib/client'
import { motion } from 'framer-motion'

const ProjectDetails = ({ project }) => {
    const tags = project.tag.split(" ")
  return (
    <div className='flex items-center justify-center w-[90%] md:w-[70%] m-auto'>
      <motion.div animate={{
        scale:[0.8, 1], 
      }}
      transition={{
        duration: 0.8,
        ease: 'easeIn'
      }} className='flex flex-col p-[20px] md:p-[50px] mt-[50px] lg:max-w-[1200px] bg-neutral-800 rounded-[50px] '>
        <div className='text-[22px] sm:text-[34px] font-bold typed-out2'>{project.name}</div>
        <div className='flex flex-col lg:flex-row mt-[20px] items-center justify-center lg:items-start'>
          <Image src={urlFor(project.image).url()} width={600} height={100} alt='project-image' className='w-[300px] h-[220px] sm:w-[350px] sm:h-[240px] lg:w-[600px] lg:h-[360px] rounded-3xl border-[1px] border-green-800'/>
          <motion.div animate={{
            opacity:[0,1]
          }}
          transition={{
            duration: 1,
            delay: 0.5
          }}   
          className='pl-[20px] text-[18px] mt-[20px] lg:mt-[0px]'>{project.about}
          <Link href={project.link} className='mt-[20px] bg-stone-700 w-[120px] h-[30px] flex items-center justify-center hover:bg-stone-600 font-bold'>
            Demo
          </Link>
          <div className='mt-[20px] text-green-700'>
            {tags.map(tag => " #" + tag)}
          </div>
          </motion.div>
        </div>
        <div className='mt-[30px] bg-green-900 w-[100px] h-[40px] flex items-center justify-center rounded-[50px] hover:bg-green-800'>
          <Link href='/projects'>
            Go back
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectDetails