'use client';
import React from 'react';
import { urlFor } from '../../lib/client';
import Image from 'next/image';
import SkillBox from './SkillBox';
import { motion } from 'framer-motion';
import Experience from './Experience';

const AboutMe = ({ text, image, skills, experience }) => {
  const resume = 'DOWNLOAD MY RESUME';
  return (
    <div className='w-[90%] md:w-[70%] m-auto flex flex-col'>
      <motion.div
        animate={{
          y: [-100, 0],
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
        className='flex flex-col lg:flex-row p-[20px] lg:p-[50px] bg-gradient-to-r from-green-900 via-green-700 to-green-900 min-h-[300px] rounded-b-3xl border-t-[2px] border-stone-700'
      >
        <div className='flex flex-col items-center md:flex-row m-auto  '>
          <Image
            className='rounded-full border-[2px] border-white h-[200px] w-[200px] md:h-[250px] md:w-[250px] ring-2 mb-[10px] sm:mb-[0px]'
            height={300}
            width={300}
            alt='my pic'
            src={urlFor(image).url()}
          />
          <div className='pl-[20px]'>
            <motion.div
              animate={{
                x: [400, 0],
                opacity: [0, 1],
              }}
              transition={{
                duration: 2,
              }}
              className='text-[24px] md:text-[30px] font-bold underline decoration-stone-300'
            >
              About me
            </motion.div>
            <motion.div
              animate={{
                opacity: 1,
                y: [100, 0],
              }}
              transition={{
                opacity: 0,
                duration: 2,
              }}
              className='text-[14px] md:text-[17px]'
            >
              {text}
              <div className='mt-[10px]'>
                <div className='bg-stone-500 p-[8px] w-fit m-auto rounded-xl cursor-pointer hover:bg-neutral-500 text-[13px] font-semibold'>
                  <a href='assets/Wojciech_Ratajczak_-_Junior_Web_Developer.pdf' download>{resume}</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <div className='flex flex-col md:flex-row mt-[20px] '>
        <motion.div
          className='text-[20px] mb-[10px] md:mb-[0px] font-bold p-[20px] md:w-[50%] bg-neutral-900 rounded-3xl z-5'
          animate={{
            y: [300, 0],
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
        >
          <div className='font-semibold'>My experience</div>
          <div className='mt-[20px]'>
            {experience.map((e) => (
              <Experience key={e.date} experience={e} />
            ))}
          </div>
        </motion.div>
        <motion.div
          className='md:w-[50%]  bg-neutral-900 p-[20px] rounded-3xl sm:ml-[10px]'
          animate={{
            x: [300, 0],
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
        >
          <div className='text-[20px] font-semibold mb-[10px] '>
            My skillset
          </div>
          <div className='flex flex-row flex-wrap items-center justify-center'>
            {skills.map((s) => (<SkillBox key={s.skill} skills={s}/>))}
          </div>
        </motion.div>
      </div>
      
    </div>
  )
}

export default AboutMe