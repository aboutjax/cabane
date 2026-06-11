'use client'

import type { StaticImageData } from 'next/image'

import { cn } from '@/utilities/ui'
import React, { useState } from 'react'
import RichText from '@/components/RichText'
import Lightbox from 'yet-another-react-lightbox'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/captions.css'

import type { MediaBlock as MediaBlockProps } from '@/payload-types'

import { Media } from '../../components/Media'

type Props = MediaBlockProps & {
  breakout?: boolean
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  staticImage?: StaticImageData
  disableInnerContainer?: boolean
}

export const MediaBlock: React.FC<Props> = (props) => {
  const {
    captionClassName,
    className,
    enableGutter = true,
    imgClassName,
    media,
    staticImage,
    disableInnerContainer,
  } = props

  const [open, setOpen] = useState(false)

  let caption
  if (media && typeof media === 'object') caption = media.caption

  const slide =
    media && typeof media === 'object'
      ? {
          src: media.sizes?.xlarge?.url || media.url || '',
          alt: media.alt || '',
          width: media.sizes?.xlarge?.width || media.width || undefined,
          height: media.sizes?.xlarge?.height || media.height || undefined,
        }
      : staticImage
        ? { src: staticImage.src, alt: '', width: staticImage.width, height: staticImage.height }
        : null

  return (
    <div
      className={cn(
        {
          container: enableGutter,
        },
        className,
      )}
    >
      {(media || staticImage) && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group block w-full rounded-md overflow-hidden cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Open image fullscreen"
        >
          <Media
            pictureClassName="not-prose"
            imgClassName={cn(
              'border border-border transition-transform duration-300 group-hover:scale-[1.02]',
              imgClassName,
            )}
            resource={media}
            src={staticImage}
            size="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
          />
        </button>
      )}
      {caption && (
        <div
          className={cn(
            'mt-6',
            {
              container: !disableInnerContainer,
            },
            captionClassName,
          )}
        >
          <RichText data={caption} enableGutter={false} />
        </div>
      )}
      {slide && (
        <Lightbox
          open={open}
          index={0}
          close={() => setOpen(false)}
          slides={[slide]}
          plugins={[Captions]}
        />
      )}
    </div>
  )
}
