'use client'
import React, { FC } from 'react';
import { Canvas } from '@react-three/fiber';
import Blob from './Blob';
import Socials from '../socials/Socials';

interface HeroProps {
  text: string;
  text1: string;
}

const Hero: FC<HeroProps> = ({ text, text1 }) => {
  return (
    <div className="bg-gradient-to-r from-zinc-900 via-stone-900 to-green-900 text-white w-full h-screen sm:mt-[-60px] font-bangers">
      <div className='flex flex-col md:flex-row justify-center items-center pt-[150px] md:pt-[120px]'>
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
          <div className='flex w-[100%] m-auto mt-[20px]'>
            <Socials/>
          </div>
        </div>
        <div className='w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:ml-[200px]'>
          <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
            <Blob />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Hero;
