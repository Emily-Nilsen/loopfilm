import Image from 'next/image'
import { Footer } from './Footer'
import { motion } from 'framer-motion'

export function AboutFooter() {
  return (
    <section className="relative bg-t">
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
            src="/media/aboutFooterv2_la1yic.webp"
            alt="Norway’s picturesque mountains as the perfect backdrop"
            width={3000}
            height={821}
            className="object-cover -mt-20 sm:-mt-36 lg:-mt-60 xl:-mt-72"
          />
        </motion.div>
      </div>
    </section>
  )
}
