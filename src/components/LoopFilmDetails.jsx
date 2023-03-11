import Link from 'next/link'
import Image from 'next/image'

import { Container } from './Container'
import { AboutInfographicLeft } from './AboutInfographicLeft'
import { AboutInfographicRight } from './AboutInfographicRight'

export function LoopFilmDetails() {
  return (
    <div className="relative pt-16 pb-24 -mt-10 overflow-hidden bg-t max-w-screen bg-gradient-to-b from-gray-50 sm:pt-24 sm:pb-32 md:mt-0 lg:pb-40">
      <Container>
        <div className="relative px-6 mx-auto max-w-7xl lg:px-8">
          <div className="sm:text-center">
            <h2 className="text-lg font-semibold leading-8 text-fuchsia-600">
              Mountains to the Sea
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Extreme filmmaking
            </p>
            <p className="max-w-2xl mx-auto mt-6 text-lg leading-8 text-gray-600">
              Whether you’re looking to shoot under extreme conditions or
              capture the beauty of our curvy, breathtaking roads and rugged
              coastline, we can help.
            </p>
          </div>

          <div className="flex justify-center mt-16 sm:mx-auto sm:mt-20 sm:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 sm:grid-cols-3 sm:gap-y-10 sm:gap-x-0 lg:gap-y-6 lg:pr-20">
              <div className="sm:col-span-3 xl:col-span-2">
                <AboutInfographicLeft
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/glacier_bg1k3y.webp"
                  alt="Diverse landscapes of Norway"
                  title="Diverse landscapes"
                  description="Norway is the perfect playground for any director with our vast range of landscapes, including mountains, fjords, glaciers, lakes, forests, and manufactured structures like bridges and tunnels."
                  bgColour="bg-blue-100/90"
                />
              </div>
              <div className="sm:col-span-3 sm:ml-10 sm:-mt-8 lg:justify-self-end xl:col-span-2 xl:col-start-2">
                <AboutInfographicRight
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/snow_k8i9ka.jpg"
                  alt="Let it snow"
                  title="Snowscapes"
                  description="We have snow all year round in the mountains, giving you endless possibilities for your film."
                  bgColour="bg-teal-600/10"
                />
              </div>
              <div className="sm:col-span-3 sm:-mt-8 xl:col-span-2">
                <AboutInfographicLeft
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/arri_alexa_mini_mfjzpn.jpg"
                  alt="Expert filmmakers, reliable service"
                  title="Expert filmmakers, reliable service"
                  description="We have a reputation for working with some of the best filmmakers in the world, and we’re proud to have a philosophy that every job is manageable, and every client is our most important client."
                  bgColour="bg-yellow-500/10"
                />
              </div>
              <div className="sm:col-span-3 sm:ml-10 sm:-mt-2 lg:justify-self-end xl:col-span-2 xl:col-start-2">
                <AboutInfographicRight
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/RA_Porche-kopi_n5e45u.webp"
                  alt="Leading industry standards"
                  title="Leading industry standards"
                  description="We’re also proud members of the Global Production Network, ensuring we are always up to date with the latest industry trends and standards."
                  bgColour="bg-gray-400/10"
                />
                <div className="flex mt-6 ml-3 sm:mt-0 sm:ml-10">
                  <a
                    className="transition duration-300 ease-in-out hover:opacity-75"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.globalproductionnetwork.com/"
                  >
                    <Image
                      alt="Global Production Network logo"
                      width={100}
                      height={30}
                      src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1673762573/Loop%20Film/GPN_logo_wtwvlh.svg"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
