import Image from 'next/image'

import { CannesLogo } from '@/components/Logos'
import { EpicaLogo } from '@/components/Logos'
import { ClioLogo } from '@/components/Logos'

const awards = [
  { title: '3 Bronze and 3 Shortlists', logo: CannesLogo },
  { title: '3 Gold', logo: EpicaLogo },
  { title: '1 Bronze', logo: ClioLogo },
]

const people = [
  {
    name: 'Jarle Tangen',
    role: 'Founder of LoopFilm',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1673770954/Loop%20Film/Jarle_w2viow.webp',
    bio: [
      'Meet Jarle Tangen, the founding partner of LoopFilm AS. Jarle has a wealth of experience in the film industry, having studied film at the University of Windsor in Canada and Communication studies and Philosophy at the University of Oslo in Norway.',
      'He is also an authorised ski instructor, a happy grouse hunter, and an enthusiastic hobby sailor.',
      'With over two decades of experience working on both sides of the table with service production worldwide, Jarle is well-equipped to bring your project to life.',
    ],

    linkedinUrl: 'https://www.linkedin.com/in/jarle-tangen-b2285a4/',
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
      'The film industry has recognised his quality of work and creativity. PH’s productions received several top awards from Cannes, Epica, Eurobest, and CLIO.',
    ],

    linkedinUrl: 'https://www.linkedin.com/in/phborch/',
  },
]

export function AboutUs() {
  return (
    <section className="grid grid-cols-1 pt-40 sm:grid-cols-8">
      {/* Jarle and Per-Henry */}
      <div className="col-span-7 pr-0 bg-t pt-96 sm:pr-10">
        <div className="px-6 py-12 mx-auto max-w-7xl lg:px-8 lg:py-24">
          <div className="space-y-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Our Team
              </h2>
              <p className="text-xl text-white/80">
                Meet the experienced team at LoopFilm AS, with decades of
                experience in service production and working in remote
                locations.
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul
                role="list"
                className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
              >
                {people.map((person) => (
                  <li key={person.name}>
                    <div className="space-y-4">
                      <div className="aspect-w-3 aspect-h-2">
                        <img
                          className="object-cover rounded-lg shadow-lg"
                          src={person.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="space-y-1 text-lg font-semibold leading-6 text-white">
                        <h3>{person.name}</h3>
                        <p className="font-medium text-GPN-light-blue">
                          {person.role}
                        </p>
                      </div>
                      <div className="text-lg">
                        {person.bio.map((sentence, i) => (
                          <p key={i} className="mt-4 text-white">
                            {sentence}
                          </p>
                        ))}
                      </div>

                      <ul role="list" className="flex space-x-5">
                        <li>
                          <a
                            href={person.linkedinUrl}
                            className="text-gray-200 transition duration-300 ease-in-out hover:text-GPN-light-blue"
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
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Awards */}
      <div className="flex items-center justify-center px-3 font-medium text-center bg-t text-GPN-light-blue">
        <div className="flex items-center justify-center gap-10 sm:flex-col">
          {awards.map((award, i) => (
            <div key={i} className="flex flex-col items-center justify-center ">
              <award.logo className="w-20 h-auto fill-white sm:w-28" />
              <div className="pt-4">{award.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
