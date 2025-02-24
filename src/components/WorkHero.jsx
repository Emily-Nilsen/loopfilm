import { useId, useRef, useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { motion, useInView, useMotionValue, useAnimation } from 'framer-motion'

export function WorkHero() {
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
        `h-[${viewportHeight}px] relative min-h-[50vh] overflow-hidden py-20 sm:h-screen sm:max-h-[500px] sm:pt-32 lg:pb-20`
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
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1674725050/Loop%20Film/bmw-large_rbr1c8.webp"
            unoptimized
          />
          <div className="absolute inset-0 h-1/2 bg-gradient-to-b from-gray-900" />
        </motion.div>
      </div>
    </div>
  )
}
