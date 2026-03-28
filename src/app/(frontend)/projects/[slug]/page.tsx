import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import { cache } from 'react'
import RichText from '@/components/RichText'
import Image from 'next/image'

import type { Media as MediaType } from '@/payload-types'

import { generateMeta } from '@/utilities/generateMeta'
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
    <article>
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      {/* Project Header */}
      <div className="px-6 md:px-10 pt-16 pb-12 md:pt-24 md:pb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-10">
          {project.title}
        </h1>

        {project.description && (
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl mb-12">
            {project.description}
          </p>
        )}

        {/* Metadata Table */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 border-t border-border pt-8">
          {project.client && (
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Client</p>
              <p className="text-sm">{project.client}</p>
            </div>
          )}
          {project.date && (
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                Project date
              </p>
              <p className="text-sm">
                {`${new Date(project.date).toLocaleDateString('en-US', { month: 'long' })} / ${new Date(project.date).getFullYear()}`}
              </p>
            </div>
          )}
          {project.location && (
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                Location
              </p>
              <p className="text-sm">{project.location}</p>
            </div>
          )}
          {project.projectStatus && (
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Status</p>
              <p className="text-sm capitalize">
                {project.projectStatus === 'inProgress'
                  ? 'In Progress'
                  : project.projectStatus === 'onHold'
                    ? 'On Hold'
                    : 'Completed'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Featured Image - Full Bleed */}
      {featuredImage && typeof featuredImage !== 'string' && featuredImage.url && (
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={featuredImage.url}
            alt={featuredImage.alt || project.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Content */}
      <div className="px-6 md:px-10">
        <div className="max-w-3xl mx-auto py-16">
          {project.content && (
            <RichText className="mb-16" data={project.content} enableGutter={false} />
          )}
        </div>
      </div>

      {/* Gallery - Full Bleed */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {project.gallery.map((item, index) => {
            const image = item.image as MediaType | undefined
            if (!image || typeof image === 'string' || !image.url) return null

            return (
              <div key={item.id || index} className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={image.url}
                  alt={image.alt || `${project.title} gallery image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            )
          })}
        </div>
      )}
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
