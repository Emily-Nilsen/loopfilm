import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { MountainIcon } from './Logos'
import { GlobeIcon } from './Logos'
import { ClapperboardIcon } from './Logos'

const companyFeatures = [
  {
    name: 'Full-service production',
    description: `Looking to film in Norway? Look no further than LoopFilm AS - the experienced Norwegian film production company offering a one-stop full-service production.`,
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/about_img_1_m0foha.webp',
  },
  {
    name: 'Global excellence',
    description: `Founded in 1994, we have
      established ourselves as the leading service production company in
      Norway, known for our ability to provide exceptional services
      to filmmakers worldwide.`,
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/car_qtaqko.webp',
  },
  {
    name: 'Scenic Norway',
    description:
      'Our location offers a wide range of spectacular landscapes, from white sandy beaches to glaciers, and we have the infrastructure to make filming in Norway a breeze.',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/beaches_ymznql.webp',
  },
]

export function AboutHero() {
  return (
    <div className="overflow-hidden bg-t">
      {/* Header */}
      <div className="relative bg-gray-800 pb-32 sm:-mb-0 sm:h-[70vh] sm:min-h-[550px]">
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            type: 'fade',
          }}
          className="absolute inset-0"
        >
          <Image
            fill
            className="object-cover w-full h-full"
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/aboutHero_uk3dmg.webp"
            alt="Snowy mountain in Norway"
            unoptimized
            priority
          />

          <div
            className="absolute inset-0 h-32 bg-gradient-to-b from-gray-800"
            aria-hidden="true"
          />
        </motion.div>
        <div className="relative flex items-center h-full px-6 pt-32 pb-16 mx-auto max-w-7xl sm:pt-32 sm:pb-16 lg:px-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Loop
              <span className="text-fuchsia-300">Film</span>
            </h1>
            <p className="max-w-3xl mt-6 text-lg text-white/95 sm:text-2xl">
              Bringing 30+ years of experience to the Norwegian film industry.
            </p>
          </div>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="relative z-10 px-6 pb-32 mx-auto -mt-28 max-w-7xl lg:-mt-36 lg:px-8"
        aria-labelledby="company-heading"
      >
        <h2 className="sr-only" id="company-heading">
          About LoopFilm AS
        </h2>
        <div className="grid grid-cols-1 gap-y-12 sm:gap-y-12 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {companyFeatures.map((feature, i) => (
            <motion.div
              initial={{
                opacity: 0,
                y: '100%',
                x: i % 2 === 0 ? -50 : 50,
              }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.6,
                duration: 0.8,
                ease: 'easeOut',
              }}
              key={i}
              className="relative flex flex-col max-w-3xl mx-auto bg-white shadow-xl rounded-2xl sm:flex-row lg:flex-col"
            >
              <div className="relative z-10 flex-col flex-1">
                <div>
                  <div className="relative w-full px-6 pt-10 pb-8 rounded-t-2xl bg-fuchsia-100 sm:rounded-tr-none md:px-8 lg:rounded-tr-2xl">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.name}
                    </h3>
                  </div>

                  <div className="p-6 md:p-8">
                    <p className="text-base text-gray-700">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative p-2 bg-gray-300 h-52 rounded-bl-2xl rounded-br-2xl sm:h-auto sm:w-1/2 sm:rounded-tr-2xl md:px-8 lg:h-52 lg:w-full lg:rounded-tr-none lg:rounded-bl-2xl">
                <Image
                  src={feature.image}
                  alt={feature.name}
                  unoptimized
                  fill
                  className="object-cover w-full h-full overflow-hidden rounded-bl-2xl rounded-br-2xl sm:rounded-tr-2xl sm:rounded-bl-none lg:rounded-tr-none lg:rounded-bl-2xl"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
