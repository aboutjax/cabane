'use client'
import { Logo } from '@/components/Logo/Logo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navLinks = [
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
]

export const HeaderNav: React.FC = () => {
  const pathname = usePathname()
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
      <div className="flex justify-between items-center px-6 md:px-10 py-5">
        <Link href="/" className="shrink-0 block">
          <Logo height={12} />
        </Link>
        <nav className="w-full gap-[10%] flex-1 flex justify-end items-center text-sm">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`hover:opacity-60 transition-opacity ${pathname === href ? 'opacity-100' : 'opacity-80'}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
