'use client'

import React from 'react'
import MenuButton from './MenuButton'

const Navbar = () => {
  return (
    <div className='relative flex justify-center sm:justify-end pb-2 bg-gradient-to-r from-zinc-900 via-stone-900 to-green-900 z-10'>
        <MenuButton link='/' text='Home' />
        <MenuButton link='/about' text='About Me' />
        <MenuButton link='/projects' text='Projects' />
        <MenuButton link='/contact' text='Contact' />
    </div>
  )
}

export default Navbar
