import React from 'react'
import { client } from '../lib/client'
import Hero from '../components/hero/Hero'

async function getHero () {
  const res = await client.fetch('*[_type == "hero"][0]')
  return res
}

export default async function Home () {
  const { text, text1, heroimage } = await getHero()
  return (
    <Hero text={text} text1={text1} heroimage={heroimage} />
  )
}
