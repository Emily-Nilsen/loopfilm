import Image from 'next/image'
import { Footer } from './Footer'
import { motion } from 'framer-motion'

export function LocationsFooter() {
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
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/locationsFooterv2_e8plcx.webp"
            alt="Filming on ice for a unique perspective"
            width={3000}
            height={1993}
            className="object-cover -mt-32 sm:-mt-60 lg:-mt-80"
          />
        </motion.div>
      </div>
    </section>
  )
}
