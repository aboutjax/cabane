import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'
import Image from 'next/image'

import type { Project, Media as MediaType } from '@/payload-types'

import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const projects = await payload.find({
    collection: 'projects',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  return projects.docs.map(({ slug }) => ({ slug }))
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function ProjectPage({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const decodedSlug = decodeURIComponent(slug)
  const url = '/projects/' + decodedSlug
  const project = await queryProjectBySlug({ slug: decodedSlug })

  if (!project) return <PayloadRedirects url={url} />

  const featuredImage = project.featuredImage as MediaType | undefined

  return (
    <article className="pt-16 pb-16">
      <PageClient />

      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <div className="container">
        <div className="max-w-[48rem] mx-auto mb-8">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex gap-4 text-sm text-gray-500 mb-8">
            {project.client && <span>{project.client}</span>}
            {project.year && <span>{project.year}</span>}
          </div>
          {project.description && (
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">{project.description}</p>
          )}
        </div>

        {featuredImage && typeof featuredImage !== 'string' && featuredImage.url && (
          <div className="relative aspect-[16/9] overflow-hidden mb-12">
            <Image
              src={featuredImage.url}
              alt={featuredImage.alt || project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="max-w-[48rem] mx-auto">
          {project.content && (
            <RichText className="mb-12" data={project.content} enableGutter={false} />
          )}

          {project.gallery && project.gallery.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {project.gallery.map((item, index) => {
                const image = item.image as MediaType | undefined
                if (!image || typeof image === 'string' || !image.url) return null

                return (
                  <div key={item.id || index} className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={image.url}
                      alt={image.alt || `${project.title} gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const decodedSlug = decodeURIComponent(slug)
  const project = await queryProjectBySlug({ slug: decodedSlug })

  return generateMeta({ doc: project })
}

const queryProjectBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'projects',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
