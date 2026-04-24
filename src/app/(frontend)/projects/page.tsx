import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { Card, cardGridClassName } from '@/components/Card'
import { GridFrame } from '@/components/GridFrame'

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
    <GridFrame>
      <div className="pt-12 pb-8">
        <div className="container mb-16 lg:mb-24">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight card-enter">
            Projects
          </h1>
        </div>

        <div className="container">
          <div className={cardGridClassName}>
            {projects.docs.map((project, index) => (
              <div
                key={project.slug}
                className="card-enter"
                style={{ animationDelay: `${120 + Math.min(index, 10) * 60}ms` }}
              >
                <Card doc={project} relationTo="projects" priority={index < 12} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </GridFrame>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Projects | Cabane',
  }
}
