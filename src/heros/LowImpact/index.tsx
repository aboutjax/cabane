'use client'
import React from 'react'
import { motion } from 'motion/react'

import type { Page } from '@/payload-types'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

type LowImpactHeroType =
  | {
      children?: React.ReactNode
      richText?: never
      media?: never
    }
  | (Omit<Page['hero'], 'richText'> & {
      children?: never
      richText?: Page['hero']['richText']
    })

export const LowImpactHero: React.FC<LowImpactHeroType> = ({ children, richText, media }) => {
  return (
    <div className="relative w-full">
      <div className="min-h-[30vh] select-none flex items-center justify-center text-center">
        {media && typeof media === 'object' && (
          <Media fill imgClassName="-z-10 object-cover" priority resource={media} size="100vw" />
        )}
        <div className="absolute inset-0 bg-black/60 z-0 backdrop-blur-sm" />
        <motion.div
          className="z-10 relative text-white max-w-[60ch] px-6 py-16"
          initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {children || (richText && <RichText data={richText} enableGutter={false} />)}
        </motion.div>
      </div>
    </div>
  )
}
