'use client'
import React, { Suspense } from 'react'
import { motion } from 'motion/react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { AnimatedText } from '@/components/AnimatedText'
import { shaderRegistry, extractProps } from './registry'

export const ShaderHero: React.FC<Page['hero']> = (props) => {
  const heroData = props as Page['hero'] & Record<string, any>
  const { links, media, richText, shaderType } = heroData
  const [isVisible, setIsVisible] = React.useState(true)
  const [isSafari, setIsSafari] = React.useState(false)

  React.useEffect(() => {
    const handleVisibilityChange = () => setIsVisible(!document.hidden)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  React.useEffect(() => {
    const ua = navigator.userAgent
    setIsSafari(/^((?!chrome|android|crios|fxios|edgios).)*safari/i.test(ua))
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
  const textColor = heroData.shaderTextColor ?? '#000000'

  return (
    <div className="relative isolate rounded-lg w-full h-auto flex items-center justify-center overflow-hidden">
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
      <div className="relative inset-0 p-6 min-h-full w-full flex flex-col justify-end">
        <div className="xl:max-w-[75%]">
          {richText && (
            <AnimatedText
              data={richText}
              delay={0.5}
              style={{ color: textColor }}
              className={`text-balance mb-4 font-bold text-3xl lg:text-5xl leading-tight`}
            />
          )}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex gap-4">
              {links.map(({ link }, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: 0.8 + i * 0.1 }}
                >
                  <CMSLink {...link} />
                </motion.li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
