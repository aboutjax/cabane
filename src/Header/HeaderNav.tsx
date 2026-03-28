'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const HeaderNav: React.FC = () => {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full mix-blend-difference text-white">
      <div className="flex justify-between items-center px-6 md:px-10 py-5">
        <Link href="/" className="text-2xl tracking-tight font-medium ">
          Cabane
        </Link>
        <nav className="flex gap-6 items-center text-sm">
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
