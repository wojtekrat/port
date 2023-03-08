'use client'
import React, {useState} from 'react'
import { urlFor } from '../../lib/client'
import Image from 'next/image'
import Link from 'next/link'

const Experience = ({ experience: {company, duties, date, icon, jobtitle, link }}) => {
  return (
    <div className='border-[1px] border-gray-500 m-[20px] p-[10px] w-[95%] rounded-xl flex flex-col flex-wrap'>
        <div className='flex flex-row '> 
            <div className='min-w-[100px] h-[100px] p-[5px]'>
                <Image src={urlFor(icon).url()} width={50} height={50} alt='company logo' className='rounded-full w-[80px] h-[80px]'></Image>
            </div>
                <div className='ml-[20px]'>
                    <p className='text-[17px]'>
                        {jobtitle}
                    </p>
                    <p className='text-[16px]'>
                        {company}
                    </p>
                    <div className='mt-[5px] flex flex-col items-start text-[15px] font-thin flex-wrap'>
                        {duties}
                    </div>
                    <div className='flex flex-row relative mt-[5px]'>
                        <div className='text-[15px] text-gray-300'>
                            {date}
                        </div>
                        <Link href={link} className='text-[12px] bg-neutral-700 rounded-lg cursor-pointer p-[5px] ml-[30px] hover:bg-neutral-600 '>Company website</Link>
                    </div> 

                </div>  
                       
            </div>
        </div>
  )
}

export default Experience