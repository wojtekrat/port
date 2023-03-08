'use client'
import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { ThreeCircles } from 'react-loader-spinner'
import { motion } from 'framer-motion'


const Map = () => {
  console.log(process.env.NEXT_PUBLIC_GOOGLE_MAP_API)
    const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API})
    const mapOptions = {
        center: { lat: 51.107870, lng: 17.038638 },
        zoom: 14,
        disableDefaultUI: true,
      };
    if(!isLoaded) return <div className=' w-[700px] h-[550px] flex justify-center items-center flex-col'><div className='text-[20px] mb-[10px]'>Loading</div><ThreeCircles
    height="200"
    width="200"
    color="#4fa94d"
    visible={true}
    ariaLabel="three-circles-rotating"
  /></div>
  return (
    <motion.div className='mt-[20px] md:mt-[0px] sm:ml-[20px] ' animate={{
      x: [300, 0],
      opacity: [0,1]
          }}
      transition={{
      duration: 2,
      ease: "easeInOut"
  }}>
        <GoogleMap options={mapOptions} mapContainerClassName='w-[350px] h-[350px] md:w-[700px] md:h-[550px] rounded-xl'></GoogleMap>
    </motion.div>
  )
}


export default Map