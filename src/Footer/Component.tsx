import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

export async function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-background text-foreground text-sm">
      <div className="px-6 sm:px-8 py-4 flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left md:gap-x-8">
        <span className="whitespace-nowrap font-bold">Cabane</span>
        <a
          href="https://www.instagram.com/cabanenyc/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Instagram
        </a>
        <div>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>
        <span>+19177140148</span>
        <div>
          <span>228 Park Ave S. PMB 870455. New York, NY 10003</span>
        </div>
      </div>
    </footer>
  )
}
