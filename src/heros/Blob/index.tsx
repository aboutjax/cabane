'use client'
import React from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { GrainGradient } from '@paper-design/shaders-react'

export const BlobHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const [isVisible, setIsVisible] = React.useState(true)

  React.useEffect(() => {
    const handleVisibilityChange = () => setIsVisible(!document.hidden)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  return (
    <div
      className="relative w-screen h-[calc(100svh-var(--admin-bar-height,0px))] flex items-center justify-center overflow-hidden text-white"
      data-theme="dark"
    >
      {/* Background media */}
      <div className="absolute inset-0 select-none">
        {media && typeof media === 'object' && (
          <Media
            fill
            imgClassName="object-cover"
            videoClassName="absolute inset-0 w-full h-full object-cover"
            priority
            resource={media}
          />
        )}
      </div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/80" /> */}

      {/* Grain Gradient */}
      <GrainGradient
        width={'100%'}
        height={'100%'}
        colors={['#7300ff', '#eba8ff', '#00bfff', '#2b00ff']}
        colorBack="#000000"
        softness={0.6}
        intensity={0.8}
        noise={0}
        shape="blob"
        speed={isVisible ? 0.3 : 0}
        className="absolute inset-0 -z-10"
      />

      {/* Content */}
      <div className="absolute inset-0 h-full w-full flex flex-col justify-end">
        <div className="p-10 max-w-[60ch] mix-blend-exclusion">
          {richText && <RichText className="mb-4" data={richText} enableGutter={false} />}
        </div>
      </div>
    </div>
  )
}
