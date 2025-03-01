import { useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect'
import Image from 'next/image'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { Container } from '@/components/Container'

export function LocationsHero() {
  const [viewportHeight, setViewportHeight] = useState(0)

  useEffect(() => {
    if (isMobile) {
      setViewportHeight(window.screen.availHeight)
    } else {
      setViewportHeight(window.innerHeight)
    }
  }, [])

  return (
    <div
      className={clsx(
        `h-[${viewportHeight}px] relative min-h-[70vh] overflow-hidden py-20 sm:h-screen sm:max-h-[768px] sm:pt-32 lg:pb-20`
      )}
    >
      <div className="absolute inset-0 bg-gray-800">
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            type: 'fade',
          }}
        >
          <Image
            priority
            className="object-cover"
            fill
            alt="Arctic Norway - Filming the Northern Lights in the snow with LoopFilm"
            src="/media/locationsHero_q0qijj.webp"
            unoptimized
          />
        </motion.div>
      </div>
      <Container className="relative h-full z-1">
        <div className="grid w-full h-full grid-cols-5">
          <div className="flex flex-col justify-between col-span-4 text-white sm:col-span-3">
            <div>
              <h1 className="pt-10 mb-4 text-4xl font-semibold tracking-tight sm:pt-16 sm:text-5xl lg:text-6xl">
                Norway offers unmatched filming landscapes
              </h1>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
