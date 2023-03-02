import Image from 'next/image'
import Link from 'next/link'
import { Button } from './Button'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
}

const slideUp = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 1,
      type: 'fade',
      ease: 'easeOut',
    },
  },
}

const slideIn = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

function FeatureHeading() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <div className="overflow-x-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-6 sm:pb-10 lg:px-8">
        <motion.div
          ref={ref}
          whileInView={{ opacity: inView ? 1 : 0 }}
          variants={container}
          initial={inView ? 'show' : 'hidden'}
          animate={inView ? 'show' : 'hidden'}
        >
          <motion.div variants={slideUp} className="text-center">
            <div>
              <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Film in Norway’s stunning natural settings
              </p>
              <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
                From fjords, snowy mountains, and forests to cities, explore the
                diverse and spectacular locations available for your next
                production.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export function HomepageFeature() {
  const [reelRef, reelInView] = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  return (
    <section className="py-16 sm:py-24">
      <FeatureHeading />
      <motion.div
        ref={reelRef}
        whileInView={{ opacity: reelInView ? 1 : 0 }}
        variants={container}
        initial={reelInView ? 'show' : 'hidden'}
        animate={reelInView ? 'show' : 'hidden'}
        className="mx-auto flex max-w-full justify-end"
      >
        <motion.div variants={slideIn} className="relative sm:-mt-16 lg:-mt-20">
          <Image
            alt="LoopFilm Feature Reel"
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1673943616/Loop%20Film/LoopFilm_feature_reel_w1zliz.svg"
            width={1187}
            height={829}
            className="relative z-0 object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
