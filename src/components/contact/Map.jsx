'use client'
import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { ThreeCircles } from 'react-loader-spinner'
import { motion } from 'framer-motion'


const Map = () => {
  const center = useMemo(() => ({ lat: 51.107883, lng: 17.038538}), [])
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
    <motion.div className='mt-[10px] md:mt-[50px] sm:ml-[20px] pb-[50px] ' animate={{
      x: [300, 0],
      opacity: [0,1]
          }}
      transition={{
      duration: 2,
      ease: "easeInOut"
  }}>
        <GoogleMap options={mapOptions} mapContainerClassName='w-[350px] h-[350px] sm:w-[500px] sm:h-[500[px] lg:w-[700px] lg:h-[540px] rounded-xl'>
          <Marker position={center}/>
        </GoogleMap>
    </motion.div>
  )
}


export default Map