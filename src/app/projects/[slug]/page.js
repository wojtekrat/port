import { client } from '../../../lib/client'
import ProjectDetails from '../../../components/projects/ProjectDetails'

async function getProjects() {
  const res = await client.fetch('*[_type == "project"]')
  return res
}

export async function generateStaticParams() {
  const projects = await getProjects()

  return projects?.map(c => ({
    slug: c.slug.current,
  }))
}



export default async function ProjectPage({ params }) {

  async function getSpecificProject() {
    const res = await client.fetch(`*[_type == "project" && slug.current == '${params.slug}'][0]`)
    return res
  }
  const project = await getSpecificProject()

  return (
    <div>
      <ProjectDetails project={project} />
    </div>
  )
}