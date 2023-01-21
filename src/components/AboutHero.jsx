import Image from 'next/image'

import { MountainIcon } from './Logos'
import { GlobeIcon } from './Logos'
import { ClapperboardIcon } from './Logos'

const supportLinks = [
  {
    name: 'Professional production',
    description: `If you’re looking for a professional Norwegian film production
      company specialising in service production, look no further
      than LoopFilm Productions AS.`,
    icon: ClapperboardIcon,
  },
  {
    name: 'Global excellence',
    description: `Founded in 1994, we have
      established ourselves as the leading production company in
      Norway, known for our ability to provide exceptional services
      to filmmakers worldwide.`,
    icon: GlobeIcon,
  },
  {
    name: 'Scenic Norway',
    description:
      'Our location offers a wide range of spectacular landscapes, from white sandy beaches to glaciers, and we have the infrastructure to make filming in Norway a breeze.',
    icon: MountainIcon,
  },
]

export function AboutHero() {
  return (
    <div className="bg-t">
      {/* Header */}
      <div className="relative bg-gray-800 pb-32 sm:h-[70vh] sm:min-h-[550px]">
        <div className="absolute inset-0">
          <Image
            fill
            className="object-cover w-full h-full"
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1672749093/Loop%20Film/000342_Baard-Loeken_www.nordnorge.com_luco06.jpg"
            alt="Snowy mountain glacier in Norway"
            unoptimized
            priority
          />
          <div
            className="absolute inset-0 bg-gray-800/30 mix-blend-multiply"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 h-32 bg-gradient-to-b from-gray-800"
            aria-hidden="true"
          />
        </div>
        <div className="relative flex items-center h-full px-6 pt-32 pb-16 mx-auto max-w-7xl sm:pt-32 sm:pb-16 lg:px-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Loop
              <span className="text-sky-600">Film</span>
            </h1>
            <p className="max-w-3xl mt-6 text-lg text-white/90 sm:text-2xl">
              Bringing 20+ years of experience to the Norwegian film industry.
            </p>
          </div>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="relative z-10 px-6 pb-32 mx-auto -mt-20 max-w-7xl lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className="relative flex flex-col max-w-md bg-gray-100 shadow-xl rounded-2xl"
            >
              <div className="relative z-10 flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className="absolute top-0 inline-block p-4 transform -translate-y-1/2 shadow-lg rounded-xl bg-sky-600 sm:p-5">
                  <link.icon
                    className="w-5 h-5 fill-white sm:h-6 sm:w-6"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {link.name}
                </h3>
                <p className="mt-4 text-base text-gray-700">
                  {link.description}
                </p>
              </div>
              <div className="p-2 bg-gray-100 rounded-bl-2xl rounded-br-2xl md:px-8"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}