import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { Media as MediaType } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const projects = await payload.find({
    collection: 'projects',
    depth: 1,
    limit: 50,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      featuredImage: true,
      client: true,
      year: true,
      categories: true,
      meta: true,
    },
  })

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Projects</h1>
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.docs.map((project) => {
            const image = project.featuredImage as MediaType | undefined

            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                {image && typeof image !== 'string' && image.url && (
                  <div className="relative aspect-[4/3] overflow-hidden mb-4">
                    <Image
                      src={image.url}
                      alt={image.alt || project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <h2 className="text-xl font-medium">{project.title}</h2>
                {project.client && (
                  <p className="text-sm text-gray-500 mt-1">
                    {project.client}
                    {project.year && ` — ${project.year}`}
                  </p>
                )}
              </Link>
            )
          })}
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
