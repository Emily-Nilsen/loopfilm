import Image from 'next/image'
import { Footer } from './Footer'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function AboutFooter() {
  const [ref, inView] = useInView({
    threshold: 0.5, // adjust as needed
    triggerOnce: true,
  })

  return (
    <section className="bg-t relative">
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
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/aboutFooterv2_la1yic.webp"
            alt="Norway’s picturesque mountains as the perfect backdrop"
            width={3000}
            height={821}
            className="-mt-20 object-cover sm:-mt-36 lg:-mt-60 xl:-mt-72"
          />
        </motion.div>
      </div>
    </section>
  )
}
