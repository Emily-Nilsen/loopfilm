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
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/fullService_tvr6do.webp',
  },
  {
    name: 'Global excellence',
    description: `Founded in 1994, we have
      established ourselves as the leading service production company in
      Norway, known for our ability to provide exceptional services
      to filmmakers worldwide.`,
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/biotherm_c4o2r3.webp',
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
    <div className="bg-t overflow-hidden">
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
            className="h-full w-full object-cover"
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
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 pt-32 pb-16 sm:pt-32 sm:pb-16 lg:px-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Loop
              <span className="text-fuchsia-300">Film</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-white/95 sm:text-2xl">
              Bringing 30+ years of experience to the Norwegian film industry.
            </p>
          </div>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="relative z-10 mx-auto -mt-28 max-w-7xl px-6 pb-32 lg:-mt-36 lg:px-8"
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
              // whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.6,
                duration: 0.8,
                // delay: i * 0,
                ease: 'easeOut',
              }}
              key={i}
              className="relative mx-auto flex max-w-3xl flex-col rounded-2xl bg-white shadow-xl sm:flex-row lg:flex-col"
            >
              <div className="relative z-10 flex-1 flex-col">
                <div>
                  <div className="relative w-full rounded-t-2xl bg-fuchsia-100 px-6 pt-10 pb-8 sm:rounded-tr-none md:px-8 lg:rounded-tr-2xl">
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
              <div className="relative h-52 rounded-bl-2xl rounded-br-2xl bg-gray-300 p-2 sm:h-auto sm:w-1/2 sm:rounded-tr-2xl md:px-8 lg:h-52 lg:w-full lg:rounded-tr-none lg:rounded-bl-2xl">
                <Image
                  src={feature.image}
                  alt={feature.name}
                  unoptimized
                  fill
                  className="h-full w-full overflow-hidden rounded-bl-2xl rounded-br-2xl object-cover sm:rounded-tr-2xl sm:rounded-bl-none lg:rounded-tr-none lg:rounded-bl-2xl"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
