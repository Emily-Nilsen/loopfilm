import Image from 'next/image'
import { Footer } from './Footer'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function WorkFooter() {
  const [ref, inView] = useInView({
    threshold: 0.5, // adjust as needed
    triggerOnce: true,
  })

  return (
    <section className="relative">
      <div className="flex flex-col">
        <div className="relative z-10">
          <Footer />
        </div>
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            duration: 1,
            type: 'fade',
            ease: 'easeIn',
          }}
        >
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/workFooter_fjelfg.webp"
            alt="Beautiful Norway"
            width={3000}
            height={1993}
            className="object-cover -mt-24 lg:-mt-36"
          />
        </motion.div>
      </div>
    </section>
  )
}
