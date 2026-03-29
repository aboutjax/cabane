import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { Media as MediaType } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/utilities/ui'

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
    },
  })

  return (
    <div className="pt-16 pb-32 md:pt-24 lg:pb-40">
      <div className="px-6 md:px-10 mb-16 lg:mb-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">Projects</h1>
      </div>

      <div className="px-6 md:px-10">
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 md:grid-cols-3 md:gap-x-5 md:gap-y-14 xl:grid-cols-5 xl:gap-x-6 xl:gap-y-16">
          {projects.docs.map((project) => {
            const image = project.featuredImage as MediaType | undefined

            const cardContent = (
              <>
                {image && typeof image !== 'string' && image.url && (
                  <div className="relative aspect-4/5 overflow-hidden">
                    <Image
                      src={image.url}
                      alt={image.alt || project.title}
                      fill
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNlNWU1ZTUiLz48L3N2Zz4="
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                      className={cn('object-cover transition-transform duration-500 ease-out')}
                    />
                  </div>
                )}
                <div className="mt-3">
                  <h2 className="text-sm font-medium leading-tight">{project.title}</h2>
                  {project.client && (
                    <p className="text-xs text-muted-foreground mt-0.5">{project.client}</p>
                  )}
                </div>
              </>
            )

            return (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="group block">
                {cardContent}
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
