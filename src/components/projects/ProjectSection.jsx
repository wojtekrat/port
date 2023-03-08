'use client'
import React from 'react'
import ProjectCard from '../../components/projects/ProjectCard'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ProjectSection = ({projects}) => {
  return (
    <div>
        <motion.div animate={{
          x:[-300, 0],
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }} className='bg-gradient-to-r from-green-900 via-stone-900 to-zinc-900   lg:pl-[200px] pt-[20px] pb-[20px] pl-[10px] flex flex-col border-t-[2px] border-stone-800'>
            <motion.div animate={{
              y:[-100,0]
            }}
            transition={{
              duration: 1.5
            }}
            className='text-[26px] lg:text-[38px] font-bold'>Projects</motion.div>
            <div className='text-[16px] shadow-sm flex lg:w-[700px] flex-wrap'>Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with live demos. It shows my ability to solve problems and work with different technologies.</div>
        </motion.div>
        <motion.div animate={{
          opacity: [0, 1],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }} className=' m-auto w-[80%] pt-[10px]'>  
            <div className='mt-[30px] flex flex-wrap justify-center align-middle '>
            {projects.map((p) => (<Link key={p.name} href={`/projects/${p.slug.current}`}><ProjectCard {...p}/></Link>))}
            </div>
        </motion.div>
    </div>
  )
}

export default ProjectSection