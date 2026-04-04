'use client'
import React, { Suspense } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { AnimatedText } from '@/components/AnimatedText'
import { shaderRegistry, extractProps } from './registry'

export const ShaderHero: React.FC<Page['hero']> = (props) => {
  const heroData = props as Page['hero'] & Record<string, any>
  const { links, media, richText, shaderType } = heroData
  const [isVisible, setIsVisible] = React.useState(true)

  React.useEffect(() => {
    const handleVisibilityChange = () => setIsVisible(!document.hidden)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  if (!shaderType) return null

  const entry = shaderRegistry[shaderType]
  if (!entry) return null

  const shaderParams = extractProps(shaderType, entry.colorArrayKeys, heroData)

  // Resolve media URL for image-based shaders
  const imageUrl = entry.needsImage && media && typeof media === 'object' ? media.url : undefined

  const ShaderComponent = entry.component

  // Common shader sizing + motion props
  const speed = isVisible ? (heroData.shaderSpeed ?? 0.3) : 0
  const scale = heroData.shaderScale ?? 1
  const rotation = heroData.shaderRotation ?? 0

  return (
    <div
      className="relative w-screen h-[calc(100svh-var(--admin-bar-height,0px))] flex items-center justify-center overflow-hidden text-white"
      data-theme="dark"
    >
      <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
        <ShaderComponent
          width="100%"
          height="100%"
          speed={speed}
          scale={scale}
          rotation={rotation}
          className="absolute inset-0 -z-10 animate-in fade-in duration-1000 fill-mode-backwards"
          {...shaderParams}
          {...(imageUrl ? { image: imageUrl } : {})}
        />
      </Suspense>

      {/* Content */}
      <div className="absolute inset-0 h-full w-full flex flex-col justify-end">
        <div className="sm:p-10 p-6 max-w-[80ch]">
          {richText && (
            <AnimatedText
              data={richText}
              delay={1.3}
              className="text-balance mb-4 text-white mix-blend-exclusion text-xl sm:text-3xl"
            />
          )}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex gap-4">
              {links.map(({ link }, i) => (
                <li key={i}>
                  <CMSLink {...link} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
