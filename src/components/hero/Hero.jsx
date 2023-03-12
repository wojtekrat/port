'use client';

import React from 'react'
import { Canvas } from '@react-three/fiber'
import Blob from '../hero/Blob'

const Hero = ({ text, text1 }) => {
  return (
    <div className="absolute top-0 left-0 bg-gradient-to-r from-zinc-900 via-stone-900 to-green-900 text-white w-full h-full ">
      <div className='flex flex-col md:flex-row justify-center items-center mt-[200px] md:mt-[120px]'>
        <div>
          <div>
            <h1 className='text-[40px] lg:text-[60px] text-white typed-out'>
              {text}
            </h1>
          </div>
          <div>
            <h1 className='text-[30px] lg:text-[40px] text-white typed-out2'>
              {text1}
            </h1>
          </div>
        </div>
        <div className='w-[400px] h-[400px] md:w-[600px] md:h-[600px] ml-[50px]'>
          <Canvas  camera={{ position: [0.0, 0.0, 8.0]}}>
            <Blob />
          </Canvas>
        </div>
      </div>   
    </div>


  )
}

export default Hero