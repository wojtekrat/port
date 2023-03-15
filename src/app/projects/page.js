import React from 'react'
import { client } from '../../lib/client'
import ProjectSection from '../../components/projects/ProjectSection'

async function getProjects () {
  const res = await client.fetch('*[_type == "project"]')
  return res
}

export default async function Projects () {
  const projects = await getProjects()
  projects.reverse()
  return (
    <div>
      <ProjectSection projects={projects}/>
    </div>
  )
}
