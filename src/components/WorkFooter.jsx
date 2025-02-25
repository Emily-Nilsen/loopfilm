import Image from 'next/image'
import { Footer } from './Footer'
import { motion } from 'framer-motion'

export function WorkFooter() {
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
            src="/media/workFooter_fjelfg.webp"
            alt="Making your Norway shoot a breeze with LoopFilm - Your one-stop production solution"
            width={3000}
            height={1993}
            className="object-cover -mt-24 lg:-mt-36"
          />
        </motion.div>
      </div>
    </section>
  )
}
