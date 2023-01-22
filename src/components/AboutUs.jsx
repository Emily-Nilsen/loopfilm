import Image from 'next/image'
import { Expandable } from './Expandable'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { CannesLogo } from '@/components/Logos'
import { EpicaLogo } from '@/components/Logos'
import { EurobestLogo } from '@/components/Logos'
import { ClioLogo } from '@/components/Logos'
import { InstagramLogo } from '@/components/Logos'
import { FacebookLogo } from '@/components/Logos'
import { LinkIcon } from '@/components/Logos'

const awards = [
  { title: '3 Bronze and 3 Shortlists', logo: CannesLogo },
  { title: '3 Gold', logo: EpicaLogo },
  { title: '2 Gold, 1 Silver and 3 Bronze', logo: EurobestLogo },
  { title: '1 Bronze', logo: ClioLogo },
]

const people = [
  {
    name: 'Jarle Tangen',
    role: 'Founder of LoopFilm',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/g_face,g_east/Loop%20Film/Jarle_w2viow.webp',
    bio: [
      'Meet Jarle Tangen, the founding partner of LoopFilm AS. Jarle has a wealth of experience in the film industry, having studied film at the University of Windsor in Canada and Communication studies and Philosophy at the University of Oslo in Norway.',
      'He is also an authorised ski instructor, a happy grouse hunter, and an enthusiastic hobby sailor.',
      'With over two decades of experience working on both sides of the table with service production worldwide, Jarle is well-equipped to bring your project to life.',
    ],

    linkedinUrl: 'https://www.linkedin.com/in/jarle-tangen-b2285a4/',
    instagram: 'https://www.instagram.com/loopfilm/',
    facebook: 'https://www.facebook.com/Loopfilm.no',
  },
  {
    name: 'Per-Henry Borch',
    role: 'Film Producer',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1673770954/Loop%20Film/Per_Henry_btmlrb.webp',
    bio: [
      'Joining Jarle at LoopFilm AS is Per-Henry Borch, a seasoned film producer with over 25 years of experience in the industry. Per Henry is dedicated to getting the best results from any budget or script and takes an active role in every production stage.',
      'He works closely with all team members and has experience filming on all continents, having travelled to 55 countries and specialising in working in remote locations.',
      'He’s also been part of Norwegian climbing expeditions to K2 in Pakistan and skiing expeditions to the North and South Poles. You can find him climbing, skiing, skydiving or travelling when not working.',
      'The film industry has recognised his quality of work and creativity. Per-Henry’s productions received several top awards from Cannes, Epica, Eurobest, and CLIO.',
    ],

    linkedinUrl: 'https://www.linkedin.com/in/phborch/',
    website: 'https://imdb.me/borch',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
}

const slideIn = {
  hidden: { opacity: 0, x: '100%', rotate: 180 },
  show: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 1,
      type: 'spring',
      ease: 'easeIn',
    },
  },
}

export function AboutUs() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [awardsRef, awardsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div className="overflow-x-hidden bg-white">
      <div className="px-6 py-24 mx-auto max-w-7xl lg:px-8 lg:py-32">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="flex flex-col justify-between">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                <span className="text-sky-600">About</span> Us
              </h2>
              <p className="text-xl text-gray-500">
                Meet the professional team at LoopFilm AS, with decades of
                experience in service production and working in remote
                locations.
              </p>
            </div>
            <div className="items-end hidden lg:flex"></div>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:-mt-8 sm:space-y-0 sm:divide-y sm:divide-gray-200 lg:gap-x-8 lg:space-y-0"
            >
              {people.map((person) => (
                <li key={person.name} className="sm:py-8">
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                    <div>
                      <div className="aspect-w-3 aspect-h-3 sm:aspect-w-3 sm:aspect-h-4">
                        <Image
                          fill
                          className="object-cover rounded-lg shadow-lg"
                          src={person.imageUrl}
                          alt={person.name}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="space-y-4">
                        <div className="space-y-1 text-lg font-semibold leading-6">
                          <h3>{person.name}</h3>
                          <p className="text-sky-600">{person.role}</p>
                          {/* LinkedIn */}
                          <ul role="list" className="flex py-4 space-x-5">
                            <li>
                              <a
                                href={person.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 transition duration-300 ease-in-out hover:text-gray-700"
                              >
                                <span className="sr-only">LinkedIn</span>
                                <svg
                                  className="w-5 h-5"
                                  aria-hidden="true"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </a>
                            </li>
                            {person.website && (
                              <li>
                                <a
                                  href={person.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-400 transition duration-300 ease-in-out hover:text-gray-700"
                                >
                                  <span className="sr-only">
                                    Personal website link
                                  </span>
                                  <LinkIcon
                                    className="w-5 h-5"
                                    fill="currentColor"
                                  />
                                </a>
                              </li>
                            )}
                            {person.instagram && (
                              <li>
                                <a
                                  href={person.instagram}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-400 transition duration-300 ease-in-out hover:text-gray-700"
                                >
                                  <span className="sr-only">Instagram</span>
                                  <InstagramLogo
                                    className="w-5 h-5"
                                    fill="currentColor"
                                  />
                                </a>
                              </li>
                            )}
                            {person.facebook && (
                              <li>
                                <a
                                  href={person.facebook}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-400 transition duration-300 ease-in-out hover:text-gray-700"
                                >
                                  <span className="sr-only">Facebook</span>
                                  <FacebookLogo
                                    className="w-5 h-5"
                                    fill="currentColor"
                                  />
                                </a>
                              </li>
                            )}
                          </ul>
                        </div>
                        <Expandable>
                          {({ isExpanded }) => (
                            <>
                              <ol role="list" className="pb-2 text-lg">
                                {person.bio
                                  .slice(0, isExpanded ? undefined : 1)
                                  .map((sentence, i) => (
                                    <li key={i}>
                                      <p className="mt-4 text-gray-500">
                                        {sentence}
                                      </p>
                                    </li>
                                  ))}
                              </ol>
                              <Expandable.Button>See more</Expandable.Button>
                            </>
                          )}
                        </Expandable>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Awards */}
        <div className="flex w-full pt-16 bg-t">
          <div
            ref={awardsRef}
            id="awards"
            className="flex items-center w-full max-w-4xl px-3 mx-auto text-sm font-medium text-center text-sky-50"
          >
            <motion.div
              whileInView={{ opacity: awardsInView ? 1 : 0 }}
              variants={container}
              initial={awardsInView ? 'show' : 'hidden'}
              animate={awardsInView ? 'show' : 'hidden'}
              className="grid w-full grid-cols-2 gap-2 md:grid-cols-4"
            >
              {awards.map((award, i) => (
                <motion.div
                  variants={slideIn}
                  key={i}
                  className="flex flex-col items-center justify-around gap-2 p-6 mx-auto rounded-full shadow-sm h-36 w-36 bg-sky-900 sm:h-40 sm:w-40 sm:p-8 lg:justify-evenly lg:gap-0"
                >
                  <div className="flex items-center justify-center h-full">
                    <award.logo className="h-auto max-h-[70px] w-24 max-w-[80px] fill-sky-200 sm:max-h-[80px] sm:w-28 sm:max-w-[100px]" />
                  </div>
                  <div className="max-w-[90px] pt-4 text-xs">{award.title}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
