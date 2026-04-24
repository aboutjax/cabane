'use client'
import { Logo } from '@/components/Logo/Logo'
import { CMSLink } from '@/components/Link'
import type { Header as HeaderType } from '@/payload-types'
import React from 'react'
import Link from 'next/link'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const headerRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.getBoundingClientRect().height
      document.documentElement.style.setProperty('--header-nav-height', `${height}px`)
    }
  }, [])

  return (
    <header
      ref={headerRef}
      className="fixed top-(--admin-bar-height,0px) z-50 w-full mix-blend-difference text-white animate-in fade-in duration-700 delay-[0.8s] fill-mode-backwards"
    >
      <div className="flex justify-between items-center px-6 sm:px-8 py-5">
        <Link href="/" className="shrink-0 block">
          <Logo height={12} />
        </Link>
        <nav className="w-full gap-4 flex-1 flex justify-end items-center text-sm">
          {navItems.map(({ link }, i) => (
            <CMSLink key={i} {...link} className="hover:opacity-60 transition-opacity opacity-80" />
          ))}
        </nav>
      </div>
    </header>
  )
}
