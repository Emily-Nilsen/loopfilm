import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'

export function Footer() {
  return (
    <footer className="relative z-20 border-t border-gray-200 bg-sky-500/50">
      <Container>
        <div className="flex flex-col items-start justify-between pt-16 pb-6 gap-y-12 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Link href="/" aria-label="Home">
                <div className="flex items-center">
                  <Logomark className="w-auto h-10 stroke-sky-pink" />
                </div>
              </Link>
              <div className="ml-4">
                <p className="text-base font-semibold">Loop Film AS</p>
                <p className="mt-1 text-sm">
                  Capturing the natural beauty of Norway.
                </p>
              </div>
            </div>
            <nav className="flex gap-8 mt-11">
              <NavLinks />
            </nav>
          </div>
        </div>
        <div className="flex items-center pt-8 pb-12 border-t border-gray-200 md:pt-6">
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; LoopFilm {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
