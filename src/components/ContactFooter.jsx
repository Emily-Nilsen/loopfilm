import Image from 'next/image'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { Footer } from './Footer'

export function ContactFooter() {
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
        <div>
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/contactFooter_wscxxc.webp"
            alt="Beautiful Oslo"
            width={3000}
            height={1148}
            className="object-cover -mt-20 sm:-mt-36 lg:-mt-52"
          />
        </div>
      </motion.div>
    </section>
  )
}
