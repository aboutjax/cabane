import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import { cache } from 'react'
import RichText from '@/components/RichText'
import Image from 'next/image'
import { RenderBlocks } from '@/blocks/RenderBlocks'

import type { Media as MediaType } from '@/payload-types'

import { generateMeta } from '@/utilities/generateMeta'
import { isEmptyArray, isLexicalEmpty } from '@/utilities/isLexicalEmpty'
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

  return (
    <article>
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      {/* Project Header */}
      <div className="pt-40 px-6 sm:px-8 pb-8 text-balance border-b border-border">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-10">
          {project.title}
        </h1>

        {project.description && (
          <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-2xl mb-12">
            {project.description}
          </p>
        )}

        {/* Metadata Table */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-8 gap-y-6 border-t border-border pt-8">
          {project.date && (
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Year</p>
              <p className="text-sm">{new Date(project.date).getFullYear()}</p>
            </div>
          )}
          {project.client && (
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Client</p>
              <p className="text-sm">{project.client}</p>
            </div>
          )}
          {project.categories && project.categories.length > 0 && (
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                Categories
              </p>
              <div className="flex flex-wrap gap-2">
                {project.categories.map((cat) => {
                  const category = typeof cat === 'object' ? cat : null
                  if (!category) return null
                  return (
                    <span key={category.id} className="text-sm">
                      {category.title}
                    </span>
                  )
                })}
              </div>
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
                  : project.projectStatus === 'speculative'
                    ? 'Speculative'
                    : project.projectStatus === 'competition'
                      ? 'Competition'
                      : 'Completed'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      {project.content && !isLexicalEmpty(project.content) && (
        <div className="px-6 sm:px-8 text-balance">
          <div className="max-w-3xl mx-auto py-16">
            <RichText className="mb-16" data={project.content} enableGutter={false} />
          </div>
        </div>
      )}

      {/* Layout Blocks */}
      {!isEmptyArray(project.layout) && <RenderBlocks blocks={project.layout!} />}

      {/* Gallery - Full Bleed */}
      {/* Delete this after migration */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
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
                  {...(image.blurDataURL && {
                    placeholder: 'blur' as const,
                    blurDataURL: image.blurDataURL,
                  })}
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
