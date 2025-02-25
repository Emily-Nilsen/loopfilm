import Image from 'next/image'
import { Footer } from './Footer'
import { motion } from 'framer-motion'

export function HomepageFooter() {
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
            src="/media/homeFooter_okr1c4.webp"
            alt="Beautiful Norway - LoopFilm’s expert drone shots"
            width={3000}
            height={1993}
            className="object-cover -mt-40 sm:-mt-80"
          />
        </motion.div>
      </div>
    </section>
  )
}
