import React, { FC } from 'react';

const BoxAnimation: FC = () => {
  return (
    <div className='absolute top-0 left-0 w-[100%] h-[100%] z-0'>
      <ul className="circles z-0">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}

export default BoxAnimation
