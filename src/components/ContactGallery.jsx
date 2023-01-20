import Image from 'next/image'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.7,
    },
  },
}

const slideIn = {
  hidden: { opacity: 0, x: '100%' },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      type: 'spring',
      ease: 'easeIn',
    },
  },
}

const photos = [
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1672749097/Loop%20Film/003486_Baard-Loeken_www.nordnorge.com_xxndfp.jpg',
    rotation: 'rotate-2',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/000864_Bj-rn-Klauer_www.nordnorge.com_f8fou6.jpg',
    rotation: '-rotate-2',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1672749096/Loop%20Film/006268_Kristin-Folsland-Olsen_www.nordnorge.com_lmsjh2.jpg',
    rotation: 'rotate-2',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1672749094/Loop%20Film/000980_Baard-Loeken_www.nordnorge.com_y0ykxd.jpg',
    rotation: 'rotate-2',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1672749096/Loop%20Film/009870_Jonas-Berglund_Helgeland-Reiseliv_vs4rgj.jpg',
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
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
