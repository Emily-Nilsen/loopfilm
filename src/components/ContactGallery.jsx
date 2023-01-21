import Image from 'next/image'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.3,
    },
  },
}

const slideIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      type: 'fade',
      ease: 'easeOut',
    },
  },
}

const photos = [
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/gallery_3_ogurke.webp',
    rotation: 'rotate-2',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/gallery_2_bbbumk.webp',
    rotation: '-rotate-2',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/gallery_4_vjf9au.webp',
    rotation: 'rotate-2',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/gallery_5_jqm0mm.webp',
    rotation: 'rotate-2',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/gallery_1_hptbyl.webp',
    rotation: '-rotate-2',
  },
]

export function ContactGallery() {
  const [ref, inView] = useInView({ threshold: 1, triggerOnce: true })

  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div ref={ref} className="mt-16 overflow-hidden sm:mt-20">
      <motion.div
        whileInView={{ opacity: inView ? 1 : 0 }}
        variants={container}
        initial={inView ? 'show' : 'hidden'}
        animate={inView ? 'show' : 'hidden'}
        className="flex justify-center gap-5 py-4 -my-4 overflow-hidden sm:gap-8"
      >
        {photos.map((photo, imageIndex) => (
          <motion.div
            variants={slideIn}
            key={imageIndex}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl border-4 border-white bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              `${photo.rotation}`
            )}
          >
            <Image
              src={photo.image}
              width={1200}
              height={1600}
              alt="Beautiful Norway"
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 object-cover w-full h-full"
              unoptimized
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
