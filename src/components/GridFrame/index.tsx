import React from 'react'
import { cn } from '@/utilities/ui'

type GridFrameProps = {
  children: React.ReactNode
  className?: string
  topCap?: boolean
  bottomCap?: boolean
  fill?: boolean
}

export const GridFrame: React.FC<GridFrameProps> = ({
  children,
  className,
  topCap = true,
  bottomCap = true,
  fill = false,
}) => {
  return (
    <section
      className={cn(
        'gf-root relative w-full overflow-x-clip border-border',
        fill && 'min-h-dvh',
        className,
      )}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="container relative h-full">
          <span className="absolute inset-y-0 left-0 w-px bg-border" />
          <span className="absolute inset-y-0 right-0 w-px bg-border" />
          {topCap && (
            <>
              <div className="gf-hatch absolute top-0 h-12 right-full w-screen outline-y outline-1 outline-border bg-background" />
              <div className="gf-hatch absolute top-0 h-12 left-full w-screen outline-y outline-1 outline-border bg-background" />
            </>
          )}
          {bottomCap && (
            <>
              <div className="gf-hatch absolute bottom-0 h-12 right-full w-screen outline-y outline-border bg-background outline-1" />
              <div className="gf-hatch absolute bottom-0 h-12 left-full w-screen outline-y outline-border bg-background outline-1" />
            </>
          )}
        </div>
      </div>
      <div className="relative">{children}</div>
    </section>
  )
}
