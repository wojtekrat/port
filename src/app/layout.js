import React from 'react'
import Navbar from '../components/navbar/Navbar'
import '../styles/globals.css'

// eslint-disable-next-line react/prop-types
export default function RootLayout ({ children }) {
  return (
    <html lang="en">
        <head>
          <title>Wojciech Ratajczak</title>
          <link rel="icon" type="image/png" sizes="32x32" href="/logo.png"></link>
          <link href="https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet"></link>
        </head>
        <body className="bg-gradient-to-r from-zinc-900 via-stone-900 to-zinc-900 text-white no-select">
          <header>
            <Navbar />
          </header>
            {children}
        </body>
    </html>
  )
}
