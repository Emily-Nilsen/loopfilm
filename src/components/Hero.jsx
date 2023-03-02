import { useId, useRef, useState, useEffect } from 'react'

import { isMobile } from 'react-device-detect'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { motion, useInView, useMotionValue, useAnimation } from 'framer-motion'
import { CldImage } from 'next-cloudinary'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

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
        <div>
          <Image
            priority
            className="object-cover"
            fill
            alt="The Beauty of Norway"
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/landing_page_ufbowp.webp"
            unoptimized
          />
        </div>
      </div>

      <Container className="z-1 relative h-full">
        <div className="grid h-full w-full grid-cols-5">
          <div className="col-span-4 flex text-white sm:col-span-3">
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 1,
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
      <motion.div
        animate={{ opacity: 0 }}
        initial={{ opacity: 1 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          type: 'fade',
        }}
        className="absolute inset-0 bg-gray-900/95"
      />
    </div>
  )
}
