'use client'

import React from 'react'
import { motion, useReducedMotion } from 'motion/react'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

import type { OurProcessBlock as OurProcessBlockProps } from '@/payload-types'

const viewport = { once: true, amount: 0.2, margin: '0px 0px -80px 0px' }
const ease = [0.23, 1, 0.32, 1] as const

export const OurProcessBlock: React.FC<OurProcessBlockProps> = ({ heading, subHeading, steps }) => {
  const reduceMotion = useReducedMotion()

  if (!steps || steps.length === 0) return null

  const fade = (delay = 0) =>
    reduceMotion
      ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.2 } }
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease, delay },
        }

  return (
    <div className="w-full">
      <div className="container py-12">
        {heading && (
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-16"
            viewport={viewport}
            {...fade(0)}
          >
            {heading}
          </motion.h2>
        )}
        {subHeading && (
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-16"
            viewport={viewport}
            {...fade(0.08)}
          >
            {subHeading}
          </motion.p>
        )}
        <div className="space-y-24">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0

            return (
              <div
                key={step.id || index}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
              >
                <motion.div
                  className={isEven ? 'md:order-1' : 'md:order-2'}
                  viewport={viewport}
                  {...fade(0)}
                >
                  <span className="text-sm font-medium text-muted-foreground">
                    Step {index + 1}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">{step.title}</h3>
                  {step.description && <RichText data={step.description} enableGutter={false} />}
                </motion.div>
                <motion.div
                  className={`relative aspect-square overflow-hidden rounded-lg outline-offset-4 outline-border outline ${
                    isEven ? 'md:order-2' : 'md:order-1'
                  }`}
                  viewport={viewport}
                  {...fade(0.08)}
                >
                  {step.image && typeof step.image !== 'number' && (
                    <Media resource={step.image} fill imgClassName="object-cover" />
                  )}
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
