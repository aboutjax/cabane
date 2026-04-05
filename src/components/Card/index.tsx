'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React from 'react'

import type { Post, Project } from '@/payload-types'

import { Media } from '@/components/Media'

export const cardGridClassName =
  'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-4 gap-y-4 lg:gap-x-8 lg:gap-y-8 xl:gap-x-8'

export type CardPostData =
  | Pick<Post, 'slug' | 'categories' | 'meta' | 'title' | 'heroImage'>
  | Pick<Project, 'slug' | 'categories' | 'meta' | 'title' | 'featuredImage' | 'description'>

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'posts' | 'projects'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo, title: titleFromProps } = props

  const { slug, categories, title } = doc || {}
  const description = doc && 'description' in doc ? doc.description : null
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
    <article className={cn('group overflow-hidden hover:cursor-pointer', className)} ref={card.ref}>
      <div className="relative w-full aspect-square overflow-clip">
        {!featuredImage && <div className="">No image</div>}
        {featuredImage && typeof featuredImage !== 'number' && (
          <Media
            resource={featuredImage}
            fill
            imgClassName="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
            size="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      <div className="py-4">
        {titleToUse && (
          <div className="prose">
            <h3 className="text-base">
              <Link className="not-prose" href={href} ref={link.ref}>
                {titleToUse}
              </Link>
            </h3>
          </div>
        )}
        {description && <p className="line-clamp-2 text-sm">{sanitizedDescription}</p>}
        {hasCategories && (
          <div className="flex flex-wrap gap-1">
            {categories?.map((category) => {
              if (typeof category === 'object' && category !== null) {
                return (
                  <span
                    key={category.id}
                    className="text-xs text-foreground/40 font-medium uppercase mt-2"
                  >
                    {category.title}
                  </span>
                )
              }
              return null
            })}
          </div>
        )}
      </div>
    </article>
  )
}
