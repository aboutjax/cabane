'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'

import type { Post, Project } from '@/payload-types'

import { Media } from '@/components/Media'

export type CardPostData =
  | Pick<Post, 'slug' | 'categories' | 'meta' | 'title' | 'heroImage'>
  | Pick<Project, 'slug' | 'categories' | 'meta' | 'title' | 'featuredImage'>

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'posts' | 'projects'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo, showCategories, title: titleFromProps } = props

  const { slug, categories, meta, title } = doc || {}
  const { description } = meta || {}
  const featuredImage =
    doc && 'heroImage' in doc
      ? doc.heroImage
      : doc && 'featuredImage' in doc
        ? doc.featuredImage
        : null

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`

  return (
    <article
      className={cn('overflow-hidden bg-card hover:cursor-pointer', className)}
      ref={card.ref}
    >
      <div className="relative w-full aspect-square">
        {!featuredImage && <div className="">No image</div>}
        {featuredImage && typeof featuredImage !== 'number' && (
          <Media
            resource={{
              ...featuredImage,
              url: featuredImage.sizes?.square?.url || featuredImage.url,
              width: featuredImage.sizes?.square?.width || featuredImage.width,
              height: featuredImage.sizes?.square?.height || featuredImage.height,
            }}
            fill
            imgClassName="object-cover"
            size="33vw"
          />
        )}
      </div>
      <div className="py-4">
        {titleToUse && (
          <div className="prose">
            <h3>
              <Link className="not-prose" href={href} ref={link.ref}>
                {titleToUse}
              </Link>
            </h3>
          </div>
        )}
        {description && <div className="mt-2">{description && <p>{sanitizedDescription}</p>}</div>}
      </div>
    </article>
  )
}
