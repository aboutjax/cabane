'use client'

import React, { useEffect, useRef } from 'react'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

import type { OurProcessBlock as OurProcessBlockProps } from '@/payload-types'

export const OurProcessBlock: React.FC<OurProcessBlockProps> = ({ heading, subHeading, steps }) => {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    stepsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  if (!steps || steps.length === 0) return null

  return (
    <div className="w-full py-12 bg-foreground/10">
      <div className="container">
        {heading && <h2 className="text-3xl md:text-4xl font-bold mb-16">{heading}</h2>}
        {subHeading && (
          <p className="text-lg md:text-xl text-muted-foreground mb-16">{subHeading}</p>
        )}
        <div className="space-y-24">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0

            return (
              <div
                key={step.id || index}
                ref={(el) => {
                  stepsRef.current[index] = el
                }}
                className="process-step opacity-0 translate-y-8 transition-all duration-700 ease-out grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
              >
                <div className={isEven ? 'md:order-1' : 'md:order-2'}>
                  <span className="text-sm font-medium text-muted-foreground">
                    Step {index + 1}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">{step.title}</h3>
                  {step.description && <RichText data={step.description} enableGutter={false} />}
                </div>
                <div
                  className={`relative aspect-square overflow-hidden rounded-lg ${isEven ? 'md:order-2' : 'md:order-1'}`}
                >
                  {step.image && typeof step.image !== 'number' && (
                    <Media resource={step.image} fill imgClassName="object-cover" />
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <style>{`
        .process-step.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      </div>
    </div>
  )
}
