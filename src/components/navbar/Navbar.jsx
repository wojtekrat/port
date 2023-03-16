'use client'
import React, { useState } from 'react'
import MenuButton from './MenuButton'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleMenuButtonClick = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className='relative flex justify-center sm:justify-end pb-2 bg-gradient-to-r from-zinc-900 via-stone-900 to-green-900 z-10'>
      <div className='sm:hidden absolute top-0 right-0 mr-4 mt-4'>
        <button
          className='inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
          onClick={handleMenuButtonClick}
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className={`${showMenu ? 'hidden' : 'block'} h-6 w-6`}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
          <svg
            className={`${showMenu ? 'block' : 'hidden'} h-6 w-6`}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          showMenu ? 'flex' : 'hidden'
        } sm:flex flex-col sm:flex-row sm:items-center justify-center sm:justify-end w-full sm:w-auto mt-4 sm:mt-0`}
      >
        <MenuButton link='/' text='Home' />
        <MenuButton link='/about' text='About Me' />
        <MenuButton link='/projects' text='Projects' />
        <MenuButton link='/contact' text='Contact' />
      </div>
    </div>
  )
}

export default Navbar
