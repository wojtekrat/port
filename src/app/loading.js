'use client';
import React from 'react'
import { Grid } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='m-3 text-white text-xl text-center'>
            Wojtek is thinking...
            <div className='mt-2'>
            <Grid 
                height={150} 
                width={150} 
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
            </div>
        </div>
        
    </div>
  )
}

export default Loading