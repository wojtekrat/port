'use client';

import React from 'react'
import Link from 'next/link'
import MenuButton from './MenuButton';

const Navbar = () => {
  return (
    <div className='relative flex justify-end pb-2 bg-gradient-to-r from-zinc-900 via-stone-900 to-green-900 z-10'>
        <Link href="/" className={MenuButton({ size: 'md', color: 'primary' })}>Home</Link>
        <Link href="/about" className={MenuButton({ size: 'md', color: 'secondary' })}>About me</Link>
        <Link href="/projects" className={MenuButton({ size: 'md', color: 'primary' })}>Projects</Link>
        <Link href="/contact" className={MenuButton({ size: 'md', color: 'secondary' })}>Contact</Link>
    </div>
  )
}

export default Navbar