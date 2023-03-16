'use client'
import React, { FC } from 'react'
import Image from 'next/image'
import { urlFor } from '../../lib/client'
import Tilt from 'react-parallax-tilt'

export interface ProjectCardProps {
  name: string
  about: string
  slug: {
    current: string;
  }
  image: {
    asset: {
      _ref: string
    }
  }
}

const ProjectCard: FC<ProjectCardProps> = ({ name, about, image }) => {
  return (
    <Tilt>
      <div className='flex justify-center items-center flex-col bg-neutral-800 rounded-lg m-[10px]'>
        <div className='relative'>
          <Image className='w-[300px] h-[200px] pt-[16px] rounded-xl' width={400} height={1} alt='project-image' src={urlFor(image.asset._ref).url()} />
        </div>
        <div className='text-[16px] text-left pt-[5px] font-bold'>{name}</div>
        <div className='text-[14px] flex flex-wrap w-[340px] p-[20px]'>{about}</div>
      </div>
    </Tilt>
  )
}

export default ProjectCard
