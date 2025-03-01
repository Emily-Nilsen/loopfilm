import { useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect'
import Image from 'next/image'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { Container } from '@/components/Container'

export function Hero() {
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
        `min-h-screen max-h-[${viewportHeight}px] relative overflow-hidden py-20 sm:h-screen sm:max-h-[768px] sm:min-h-0 sm:pt-32 lg:max-h-[900px] lg:pb-20`
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
            alt="The Beauty of Norway"
            src="/media/landing_page_ufbowp.webp"
            unoptimized
          />
        </motion.div>
      </div>

      <Container className="relative h-full z-1">
        <div className="grid w-full h-full grid-cols-5">
          <div className="flex col-span-4 text-white sm:col-span-3">
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                type: 'fade',
              }}
            >
              <h1 className="pt-10 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Capturing the natural
                <br className="" />
                beauty of Norway
              </h1>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  )
}
