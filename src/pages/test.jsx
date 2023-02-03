import { useId, useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { isMobile } from 'react-device-detect'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { motion, useInView, useMotionValue, useAnimation } from 'framer-motion'
import { CldImage } from 'next-cloudinary'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { Logomark } from '@/components/Logo'

const container = {
  hidden: {
    scale: 7,
    x: 'calc(50vw - 108px)',
    y: '25vh',
  },
  visible: {
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 4,
      type: 'spring',
      duration: 1.0,
      bounce: 0,
    },
  },
}

const containerMobile = {
  hidden: {
    scale: 1,
    x: 'calc(50vw - 85px)',
    y: '25vh',
  },
  visible: {
    scale: 0.3,
    x: 0,
    y: 0,
    transition: {
      delay: 4,
      type: 'spring',
      duration: 1.0,
      bounce: 0,
    },
  },
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Test() {
  const router = useRouter()
  const [viewportHeight, setViewportHeight] = useState(0)

  useEffect(() => {
    if (isMobile) {
      setViewportHeight(window.screen.availHeight)
    } else {
      setViewportHeight(window.innerHeight)
    }
  }, [])

  return (
    <>
      <header className="absolute top-0 left-0 w-full">
        <nav>
          <Container className="relative z-50 flex justify-between py-8">
            {/* Logo */}
            {router.pathname === '/test' && (
              <>
                <div className="hidden sm:block">
                  <Link href="/" aria-label="Home">
                    <motion.div
                      variants={container}
                      initial="hidden"
                      animate="visible"
                      className="flex items-center"
                    >
                      <Logomark className="w-auto h-8 stroke-sky-orange" />
                    </motion.div>
                  </Link>
                </div>
                <div className="sm:hidden">
                  <Link href="/" aria-label="Home">
                    <motion.div
                      variants={containerMobile}
                      initial="hidden"
                      animate="visible"
                      className="flex items-center"
                    >
                      <Logomark className="w-auto h-24 -mt-16 -mr-40 stroke-sky-orange" />
                    </motion.div>
                  </Link>
                </div>
              </>
            )}
          </Container>
        </nav>
      </header>
      <div
        className={clsx(
          `h-[${viewportHeight}px] max-h-[${viewportHeight}px] relative min-h-screen overflow-hidden py-20 sm:h-screen sm:max-h-[768px] sm:pt-32 lg:pb-20`
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
        <Container className="relative h-full z-1">
          <div className="grid w-full h-full grid-cols-5">
            <div className="flex col-span-4 text-white sm:col-span-3">
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 4,
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
      <motion.div
        animate={{ opacity: 0 }}
        initial={{ opacity: 1 }}
        transition={{
          delay: 3.8,
          duration: 1.3,
          type: 'fade',
        }}
        className="absolute inset-0 w-full h-full bg-gray-900/95"
      />
    </>
  )
}
