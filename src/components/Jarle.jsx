import Image from 'next/image'
import { Expandable } from './Expandable'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { Container } from './Container'
import { Button } from './Button'

import { CannesLogo } from '@/components/Logos'
import { EpicaLogo } from '@/components/Logos'
import { EurobestLogo } from '@/components/Logos'
import { ClioLogo } from '@/components/Logos'
import { LinkedInLogo } from '@/components/Logos'
import { InstagramLogo } from '@/components/Logos'
import { FacebookLogo } from '@/components/Logos'
import { LinkIcon } from '@/components/Logos'
import { ArrowRightIcon } from '@/components/Logos'

const awards = [
  { title: '3 Bronze and 3 Shortlists', logo: CannesLogo },
  { title: '3 Gold', logo: EpicaLogo },
  { title: '2 Gold, 1 Silver and 3 Bronze', logo: EurobestLogo },
  { title: '1 Bronze', logo: ClioLogo },
]

const jarle = [
  {
    logo: LinkedInLogo,
    url: 'https://www.linkedin.com/in/jarle-tangen-b2285a4/',
  },
  { logo: InstagramLogo, url: 'https://www.instagram.com/loopfilm/' },
  { logo: FacebookLogo, url: 'https://www.facebook.com/Loopfilm.no' },
]

const perhenry = [
  { logo: LinkedInLogo, url: 'https://www.linkedin.com/in/phborch/' },
  { logo: LinkIcon, url: 'https://imdb.me/borch' },
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

export function Jarle() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [awardsRef, awardsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  return (
    <section className="relative w-full h-full">
      <div className="absolute w-full h-32 bg-gradient-to-b from-gray-50" />
      {/* <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-gray-50" /> */}
      <Container>
        <div className="pt-16 overflow-hidden bg-white lg:pt-24">
          <div className="relative px-6 lg:px-8">
            <h2 className="text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              About us
            </h2>
            <p className="max-w-3xl mt-4 text-xl text-gray-500">
              Meet the professional team at LoopFilm, with over thirty years of
              experience in film production service and working in remote
              locations.
            </p>
          </div>
          <div className="relative max-w-xl px-6 mx-auto mt-12 lg:mt-24 lg:max-w-7xl lg:px-8">
            <div className="relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
              <div className="relative">
                <h2 className="text-lg font-semibold text-fuchsia-700">
                  Founder of LoopFilm
                </h2>
                <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                  Jarle Tangen
                </h3>
                {/* socials */}
                <div>
                  <ul role="list" className="flex py-4">
                    {jarle.map((item, i) => (
                      <li key={i}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mr-4 text-gray-400 transition duration-300 ease-in-out hover:text-fuchsia-700"
                        >
                          <item.logo
                            className="w-5 h-5 mr-4"
                            fill="currentColor"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-3 text-lg text-gray-500">
                  Meet Jarle Tangen, the founding partner of LoopFilm AS. Jarle
                  has a wealth of experience in the film industry, having
                  studied film at the University of Windsor in Canada and
                  Communication studies and Philosophy at the University of Oslo
                  in Norway.
                </p>

                <p className="mt-3 text-lg text-gray-500">
                  He is also an authorised ski instructor, a happy grouse
                  hunter, and an enthusiastic hobby sailor.
                </p>
                <p className="mt-3 text-lg text-gray-500">
                  With over three decades of experience working on both sides of
                  the table with film production services worldwide, Jarle is
                  well-equipped to bring your project to life.
                </p>
              </div>

              <div className="relative mt-10 -mx-4 lg:mt-0" aria-hidden="true">
                <figure>
                  <Image
                    className="relative object-cover object-center mx-auto rounded-lg shadow-lg"
                    width={478}
                    height={472}
                    src="/media/Jarle_w2viow.webp"
                    alt="Jarle Tangen"
                  />
                </figure>
              </div>
            </div>

            <div className="relative mt-12 sm:mt-16 lg:mt-24">
              <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
                <div className="lg:col-start-2">
                  <h2 className="text-lg font-semibold text-fuchsia-700">
                    Film Producer
                  </h2>
                  <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                    Per-Henry Borch
                  </h3>
                  {/* socials */}
                  <div>
                    <ul role="list" className="flex py-4">
                      {perhenry.map((item, i) => (
                        <li key={i}>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mr-4 text-gray-400 transition duration-300 ease-in-out hover:text-fuchsia-700"
                          >
                            <item.logo
                              className="w-5 h-5 mr-4"
                              fill="currentColor"
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-3 text-lg text-gray-500">
                    Joining Jarle at LoopFilm AS is Per-Henry Borch, a seasoned
                    film producer with over 25 years of experience in the
                    industry. Per Henry is dedicated to getting the best results
                    from any budget or script and takes an active role in every
                    production stage.
                  </p>

                  <p className="mt-3 text-lg text-gray-500">
                    He works closely with all team members and has experience
                    filming on all continents, having travelled to 55 countries
                    and specialising in working in remote locations.
                  </p>
                  <p className="mt-3 text-lg text-gray-500">
                    He’s also been part of Norwegian climbing expeditions to K2
                    in Pakistan and skiing expeditions to the North and South
                    Poles. You can find him climbing, skiing, skydiving or
                    travelling when not working.
                  </p>
                  <p className="mt-3 text-lg text-gray-500">
                    The film industry has recognised his quality of work and
                    creativity. Per-Henry’s productions received several top
                    awards from Cannes, Epica, Eurobest, and CLIO.
                  </p>
                </div>

                <div className="relative mt-10 -mx-4 lg:col-start-1 lg:mt-0">
                  <img
                    className="relative object-cover object-center mx-auto rounded-lg shadow-lg"
                    width={435}
                    height={472}
                    src="/media/Per_Henry_btmlrb.webp"
                    alt="Per-Henry Borch"
                  />
                </div>
              </div>
            </div>
            {/* Awards */}
            <div className="flex w-full pt-16 bg-t">
              <div
                ref={awardsRef}
                id="awards"
                className="flex items-center w-full max-w-4xl px-3 mx-auto text-sm font-medium text-center text-gray-700"
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
                      className="flex flex-col items-center justify-around gap-2 p-6 mx-auto bg-gray-100 rounded-full shadow-sm h-36 w-36 sm:h-40 sm:w-40 sm:p-8 lg:justify-evenly lg:gap-0"
                    >
                      <div className="flex items-center justify-center h-full">
                        <award.logo className="h-auto max-h-[70px] w-24 max-w-[80px] fill-fuchsia-900 sm:max-h-[80px] sm:w-28 sm:max-w-[100px]" />
                      </div>
                      <div className="max-w-[90px] pt-4 text-xs">
                        {award.title}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
