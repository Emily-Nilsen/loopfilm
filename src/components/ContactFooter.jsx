import Image from 'next/image'
import { motion } from 'framer-motion'
import { Footer } from './Footer'

export function ContactFooter() {
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
            src="/media/aboutFooter_huleog.webp"
            alt="Bringing your vision to life with LoopFilm - Your reliable filming partner in Norway"
            width={3000}
            height={1148}
            className="object-cover -mt-20"
          />
        </motion.div>
      </div>
    </section>
  )
}
