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

const resolveAlt = (item: Item, media: MediaType | null) => item.altOverride || media?.alt || ''

export const GalleryBlock: React.FC<GalleryBlockProps & { className?: string }> = ({
  layout,
  items,
  className,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [carouselIndex, setCarouselIndex] = useState(0)

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
          className,
        )}
        aria-label={alt ? `Open image: ${alt}` : `Open image ${index + 1}`}
      >
        {square ? (
          <div className="relative aspect-square w-full overflow-hidden rounded-md">
            <Media
              resource={media.sizes?.square?.url ? { ...media, ...media.sizes.square } : media}
              fill
              alt={alt}
              imgClassName="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        ) : (
          <div className="overflow-hidden rounded-md">
            <Media
              resource={media}
              alt={alt}
              imgClassName="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        )}
        {item.caption && (
          <span className="mt-2 block text-sm text-muted-foreground text-left">{item.caption}</span>
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

      {layout === 'fullWidthCarousel' &&
        (() => {
          const current = items[carouselIndex]
          const media = resolveMedia(current)
          const alt = resolveAlt(current, media)
          const prev = () => setCarouselIndex((i) => (i - 1 + items.length) % items.length)
          const next = () => setCarouselIndex((i) => (i + 1) % items.length)
          return (
            <div className="w-full">
              <div className="relative w-full">
                <div className="relative w-full aspect-[4/3] sm:aspect-video overflow-hidden rounded-md bg-black">
                  {media && (
                    <button
                      type="button"
                      onClick={() => open(carouselIndex)}
                      className="absolute inset-0 w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-label={alt ? `Open image: ${alt}` : `Open image ${carouselIndex + 1}`}
                    >
                      <Media
                        resource={
                          media.sizes?.xlarge?.url ? { ...media, ...media.sizes.xlarge } : media
                        }
                        fill
                        alt={alt}
                        imgClassName="object-contain"
                      />
                    </button>
                  )}
                </div>

                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 shadow-md backdrop-blur-sm transition-opacity hover:opacity-100 opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                    <path
                      d="M12.5 15L7.5 10L12.5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 shadow-md backdrop-blur-sm transition-opacity hover:opacity-100 opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                    <path
                      d="M7.5 5L12.5 10L7.5 15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-3 flex items-start justify-between gap-4">
                <span className="text-sm text-muted-foreground min-h-[1.25rem]">
                  {current.caption || ''}
                </span>
                <span className="shrink-0 text-sm text-muted-foreground tabular-nums">
                  {carouselIndex + 1} / {items.length}
                </span>
              </div>
            </div>
          )
        })()}

      {layout === 'carousel' && (
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
          {items.map((item, i) =>
            renderThumb(item, i, 'snap-start shrink-0 w-[80%] sm:w-[60%] md:w-[40%] lg:w-[33%]'),
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
