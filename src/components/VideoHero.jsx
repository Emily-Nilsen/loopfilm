import { BackgroundVideo } from './BackgroundVideo'
import { motion, useInView, useMotionValue, useAnimation } from 'framer-motion'

export function VideoHero() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{
        duration: 0.8,
        type: 'fade',
      }}
      className="relative z-20 h-auto w-full bg-gray-900 pt-[56.25%]"
    >
      <div className="absolute inset-0">
        <BackgroundVideo />
      </div>
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-900 sm:h-60 lg:h-80" />
    </motion.div>
  )
}
