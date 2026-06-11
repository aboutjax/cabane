'use client'

import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/captions.css'

import { Media } from '@/components/Media'
import type { GalleryBlock as GalleryBlockProps, Media as MediaType } from '@/payload-types'
import { cn } from '@/utilities/ui'

type Item = NonNullable<GalleryBlockProps['items']>[number]

const resolveMedia = (item: Item): MediaType | null => {
  if (!item.media || typeof item.media === 'number') return null
  return item.media
}

const resolveAlt = (item: Item, media: MediaType | null) =>
  item.altOverride || media?.alt || ''

export const GalleryBlock: React.FC<GalleryBlockProps & { className?: string }> = ({ layout, items, className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  if (!items || items.length === 0) return null

  const slides = items.map((item) => {
    const media = resolveMedia(item)
    const src = media?.sizes?.xlarge?.url || media?.url || ''
    return {
      src,
      alt: resolveAlt(item, media),
      description: item.caption || undefined,
      width: media?.sizes?.xlarge?.width || media?.width || undefined,
      height: media?.sizes?.xlarge?.height || media?.height || undefined,
    }
  })

  const open = (index: number) => setOpenIndex(index)

  const renderThumb = (
    item: Item,
    index: number,
    className?: string,
    options?: { square?: boolean },
  ) => {
    const media = resolveMedia(item)
    if (!media) return null
    const alt = resolveAlt(item, media)
    const square = options?.square
    return (
      <button
        key={item.id || index}
        type="button"
        onClick={() => open(index)}
        className={cn(
          'group block w-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          !square && 'rounded-md',
          className,
        )}
        aria-label={alt ? `Open image: ${alt}` : `Open image ${index + 1}`}
      >
        {square ? (
          <div className="relative aspect-square w-full overflow-hidden rounded-md">
            <Media
              resource={
                media.sizes?.square?.url
                  ? { ...media, ...media.sizes.square }
                  : media
              }
              fill
              alt={alt}
              imgClassName="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        ) : (
          <Media
            resource={media}
            alt={alt}
            imgClassName="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
          />
        )}
        {item.caption && (
          <span className="mt-2 block text-sm text-muted-foreground text-left">
            {item.caption}
          </span>
        )}
      </button>
    )
  }

  return (
    <div className={className ?? 'container py-12'}>
      {layout === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => renderThumb(item, i, undefined, { square: true }))}
        </div>
      )}

      {layout === 'masonry' && (
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 *:mb-4 *:break-inside-avoid">
          {items.map((item, i) => renderThumb(item, i))}
        </div>
      )}

      {layout === 'carousel' && (
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
          {items.map((item, i) =>
            renderThumb(
              item,
              i,
              'snap-start shrink-0 w-[80%] sm:w-[60%] md:w-[40%] lg:w-[33%]',
            ),
          )}
        </div>
      )}

      <Lightbox
        open={openIndex !== null}
        index={openIndex ?? 0}
        close={() => setOpenIndex(null)}
        slides={slides}
        plugins={[Captions]}
      />
    </div>
  )
}
