'use client'
import React, { FC } from 'react';
import { CiFacebook } from 'react-icons/ci';
import { AiFillGithub } from 'react-icons/ai';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import SocialsIcon from './SocialsIcon';
import { motion } from 'framer-motion';

const Socials: FC = () => {
  return (
    <motion.div className='w-14 h-fit z-10 flex' animate={{
      x: [-150, 0]
    }} transition={{
      duration: 1
    }} >
        <SocialsIcon link='https://www.facebook.com/wojciacho.jajczak/' icon={<CiFacebook/>}/>
        <SocialsIcon link='https://github.com/wojtekrat' icon={<AiFillGithub/>}/>
        <SocialsIcon link='https://www.linkedin.com/in/wojciechratajczakk/' icon={<TiSocialLinkedinCircular/>}/>
    </motion.div>
  );
};

export default Socials;

