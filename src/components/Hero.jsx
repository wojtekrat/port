'use client';

import React from 'react'

const Hero = ({ text, text1 }) => {
  return (
    <div className="bg-gradient-to-r from-zinc-900 via-stone-900 to-green-900 text-white h-screen w-full relative ">
      <div className='absolute top-1/2 ml-[100px] mt-[-150px]'>
        <div><h1 className='text-[40px] lg:text-[60px] text-white typed-out'>{text}</h1></div>
        <div><h1 className='text-[30px] lg:text-[40px] text-white typed-out2'>{text1}</h1></div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Hero