import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { Card, cardGridClassName } from '@/components/Card'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const projects = await payload.find({
    collection: 'projects',
    depth: 1,
    limit: 50,
    overrideAccess: false,
    sort: '-date',
    select: {
      title: true,
      slug: true,
      featuredImage: true,
      client: true,
      year: true,
      categories: true,
      meta: true,
      projectStatus: true,
      location: true,
      description: true,
    },
  })

  return (
    <div className="pt-40 pb-8">
      <div className="px-6 md:px-10 mb-16 lg:mb-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">Projects</h1>
      </div>

      <div className="px-6 md:px-10">
        <div className={cardGridClassName}>
          {projects.docs.map((project) => (
            <Card key={project.slug} doc={project} relationTo="projects" />
          ))}
        </div>
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Projects | Cabane',
  }
}
