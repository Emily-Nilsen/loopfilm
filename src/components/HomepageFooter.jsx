import Image from 'next/image'
import { Footer } from './Footer'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function HomepageFooter() {
  const [ref, inView] = useInView({
    threshold: 0.5, // adjust as needed
    triggerOnce: true,
  })

  return (
    <section className="relative">
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          duration: 1,
          type: 'fade',
          ease: 'easeIn',
        }}
        className="flex flex-col"
      >
        <Footer />
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/homeFooter_okr1c4.webp"
          alt="Beautiful Norway"
          width={3000}
          height={1993}
          className="-mt-40 object-cover sm:-mt-80"
        />
      </motion.div>
    </section>
  )
}
