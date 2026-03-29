import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

export async function Footer() {
  return (
    <footer className="mt-auto bg-background text-foreground text-sm">
      <div className="px-6 md:px-10 py-4 flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left md:gap-x-8">
        <span className="whitespace-nowrap">Cabane LTD</span>
        <a
          href="https://www.instagram.com/cabanenyc/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Instagram
        </a>
        <div>
          <a href="mailto:contact@cabane.nyc" className="hover:underline">
            contact@cabane.nyc
          </a>
        </div>
        <span>+19177140148</span>
        <div>
          <span>228 Park Ave S. PMB 870455. New York, NY 10003</span>
        </div>
        <Link href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}
