import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'x6fz1ibz',
  dataset: 'portfolio',
  apiVersion: '2023-02-24',
  useCdn: true
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
