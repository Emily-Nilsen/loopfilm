import Image from 'next/image'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
}

const slideIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
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
    alt: 'Effortless filming in Norway with LoopFilm’s help',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/gallery_2_bbbumk.webp',
    rotation: '-rotate-2',
    alt: 'LoopFilm’s expert lighting techniques',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/gallery_wf1exg.webp',
    rotation: 'rotate-2',
    alt: 'LoopFilm - Where creativity meets efficiency for your Norway shoot',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/gallery_5_jqm0mm.webp',
    rotation: 'rotate-2',
    alt: 'LoopFilm’s expert glacier shots',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/gallery_1_hptbyl.webp',
    rotation: '-rotate-2',
    alt: 'Filming in Norway made easy',
  },
]

export function ContactGallery() {
  const [ref, inView] = useInView({ threshold: 0.7, triggerOnce: true })

  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div ref={ref} className="mt-16 overflow-hidden sm:mt-20">
      <motion.div
        whileInView={{ opacity: inView ? 1 : 1 }}
        variants={container}
        initial={inView ? 'show' : 'hidden'}
        animate={inView ? 'show' : 'hidden'}
        className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8"
      >
        {photos.map((photo, imageIndex) => (
          <div
            key={imageIndex}
            className={clsx(
              'z-1 aspect-square relative w-44 flex-none overflow-hidden rounded-xl border-4 border-white bg-zinc-100 sm:w-72 sm:rounded-2xl',
              `${photo.rotation}`
            )}
          >
            <svg
              className="relative z-20"
              id="Layer_2"
              data-name="Layer 2"
              viewBox="0 0 208.55 249.22"
            >
              <g className="fill-gray-300" id="Layer_1-2" data-name="Layer 1">
                <g>
                  <g>
                    <path
                      fill="#fff"
                      d="m.67,29.92v189.37h201.22V29.92H.67Zm16.01,179.32V39.98h175.55v169.26H16.68Z"
                    />
                    <path d="m206.6,0H1.96C.88,0,0,.88,0,1.96v245.3c0,1.08.88,1.96,1.96,1.96h204.64c1.08,0,1.95-.88,1.95-1.96V1.96c0-1.08-.87-1.96-1.95-1.96Zm-14.37,209.24H16.68V39.98h175.55v169.26Z" />
                  </g>
                  <path
                    fill="#fff"
                    d="m194.17,219.29c-.8-.68-1.84-1.1-2.97-1.1h-6.23c-1.13,0-2.17.42-2.96,1.1-.97.84-1.58,2.07-1.58,3.44v12.99c0,2.5,2.04,4.54,4.54,4.54h6.23c2.52,0,4.55-2.04,4.55-4.54v-12.99c0-1.38-.61-2.61-1.58-3.44Zm-33.39,0c-.8-.68-1.83-1.1-2.97-1.1h-6.23c-1.12,0-2.16.42-2.96,1.1-.97.83-1.58,2.06-1.58,3.44v12.99c0,2.5,2.04,4.54,4.54,4.54h6.23c2.51,0,4.55-2.04,4.55-4.54v-12.99c0-1.38-.61-2.61-1.58-3.44Zm-33.4,0c-.8-.68-1.83-1.1-2.96-1.1h-6.23c-1.13,0-2.16.42-2.96,1.1-.97.83-1.59,2.06-1.59,3.44v12.99c0,2.5,2.05,4.54,4.55,4.54h6.23c2.51,0,4.55-2.04,4.55-4.54v-12.99c0-1.38-.62-2.61-1.59-3.44Zm-33.38,0c-.8-.68-1.84-1.1-2.97-1.1h-6.23c-1.13,0-2.17.42-2.97,1.1-.97.84-1.58,2.07-1.58,3.44v12.99c0,2.5,2.04,4.54,4.55,4.54h6.23c2.51,0,4.54-2.04,4.54-4.54v-12.99c0-1.37-.61-2.6-1.57-3.44Zm-33.4,0c-.8-.68-1.83-1.1-2.96-1.1h-6.23c-1.13,0-2.17.42-2.97,1.1-.97.83-1.58,2.06-1.58,3.44v12.99c0,2.5,2.04,4.54,4.55,4.54h6.23c2.5,0,4.54-2.04,4.54-4.54v-12.99c0-1.38-.61-2.61-1.58-3.44Zm-33.39,0c-.79-.68-1.83-1.1-2.96-1.1h-6.23c-1.13,0-2.17.42-2.97,1.1-.97.83-1.58,2.06-1.58,3.44v12.99c0,2.5,2.03,4.54,4.55,4.54h6.23c2.5,0,4.54-2.04,4.54-4.54v-12.99c0-1.37-.61-2.6-1.58-3.44ZM191.2,8.95h-6.23c-2.5,0-4.54,2.04-4.54,4.55v12.98c0,1.38.61,2.61,1.58,3.44.79.69,1.83,1.11,2.96,1.11h6.23c1.13,0,2.17-.42,2.97-1.11.97-.83,1.58-2.06,1.58-3.44v-12.98c0-2.51-2.03-4.55-4.55-4.55Zm-33.39,0h-6.23c-2.5,0-4.54,2.04-4.54,4.55v12.98c0,1.38.61,2.61,1.58,3.44.8.69,1.84,1.11,2.96,1.11h6.23c1.14,0,2.17-.42,2.97-1.11.97-.83,1.58-2.06,1.58-3.44v-12.98c0-2.51-2.04-4.55-4.55-4.55Zm-33.39,0h-6.23c-2.5,0-4.55,2.04-4.55,4.55v12.98c0,1.38.62,2.61,1.59,3.44.8.69,1.83,1.11,2.96,1.11h6.23c1.13,0,2.16-.42,2.96-1.11.97-.83,1.59-2.06,1.59-3.44v-12.98c0-2.51-2.04-4.55-4.55-4.55Zm-33.39,0h-6.23c-2.51,0-4.55,2.04-4.55,4.55v12.98c0,1.38.61,2.61,1.58,3.44.8.69,1.84,1.11,2.97,1.11h6.23c1.13,0,2.17-.42,2.97-1.11.96-.83,1.57-2.06,1.57-3.44v-12.98c0-2.51-2.03-4.55-4.54-4.55Zm-33.39,0h-6.23c-2.51,0-4.55,2.04-4.55,4.55v12.98c0,1.38.61,2.61,1.58,3.44.8.69,1.84,1.11,2.97,1.11h6.23c1.13,0,2.16-.42,2.96-1.11.97-.83,1.58-2.06,1.58-3.44v-12.98c0-2.51-2.04-4.55-4.54-4.55Zm-33.39,0h-6.23c-2.52,0-4.55,2.04-4.55,4.55v12.98c0,1.38.61,2.61,1.58,3.44.8.69,1.84,1.11,2.97,1.11h6.23c1.13,0,2.17-.42,2.96-1.11.97-.83,1.58-2.06,1.58-3.44v-12.98c0-2.51-2.04-4.55-4.54-4.55Z"
                  />
                </g>
              </g>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div variants={slideIn}>
                <Image
                  src={photo.image}
                  width={1200}
                  height={1600}
                  alt={photo.alt}
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="absolute inset-0 h-full w-full object-cover opacity-100"
                  unoptimized
                />
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
