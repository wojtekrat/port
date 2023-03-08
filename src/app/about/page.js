import React from 'react'
import { client } from '../../lib/client'
import AboutMe from '../../components/aboutme/AboutMe'

async function getAboutme() {
  const res = await client.fetch('*[_type == "about"][0]')
  return res
}

async function getSkills() {
  const res = await client.fetch('*[_type == "skills"]')
  return res
}

async function getExperience() {
  const res = await client.fetch('*[_type == "experience"]')
  return res
}

export default async function About() {
  const { text, myimage } = await getAboutme()
  const skills = await getSkills()
  const experience = await getExperience()
  return (
    <AboutMe text={text} image={myimage} skills={skills} experience={experience} />
  )
}
