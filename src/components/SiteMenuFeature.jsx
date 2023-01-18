import Image from 'next/image'
import Link from 'next/link'
import { Button } from './Button'

function FeatureHeading() {
  return (
    <div className="bg-white">
      <div className="px-6 pt-16 pb-6 mx-auto max-w-7xl sm:pb-10 sm:pt-24 lg:px-8">
        <div className="text-center">
          <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Film in Norway’s stunning natural settings
          </p>
          <p className="max-w-xl mx-auto mt-5 text-xl text-gray-500">
            From fjords, snowy mountains, and forests to cities, explore the
            diverse and spectacular locations available for your next
            production.
          </p>
        </div>
      </div>
    </div>
  )
}

export function SiteMenuFeature() {
  return (
    <section>
      <FeatureHeading />
      <div className="flex justify-end max-w-full mx-auto">
        <div className="relative">
          <Image
            alt="LoopFilm Feature Reel"
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1673943616/Loop%20Film/LoopFilm_feature_reel_w1zliz.svg"
            width={1187}
            height={829}
            className="relative z-0 object-cover"
          />

          <div className="absolute inset-0 grid grid-cols-5 grid-rows-3 gap-3 text-sm font-medium text-white bg-t text-shadow sm:text-lg">
            <div className="bg-t"></div>
            <div className="bg-t"></div>
            <div className="bg-t"></div>
            <div className="bg-t"></div>
            <div id="contact-reel" className="flex items-center bg-orange-t">
              <Link
                href="/contact"
                className="-ml-[10vw] mt-[4vw] h-fit cursor-pointer px-[3vw] py-[2vw] transition duration-300 ease-in-out hover:scale-110 hover:text-white md:-ml-[7vw] md:mt-[3vw] lg:-ml-[5vw]"
              >
                Contact
              </Link>
            </div>
            <div
              id="home-reel"
              className="flex items-start justify-center bg-t"
            >
              <Link
                href="/"
                className="-ml-[1vw] h-fit -rotate-12 cursor-pointer px-[2vw] py-[2vw] transition duration-300 ease-in-out hover:scale-110 hover:text-white md:mt-[0.5vw]"
              >
                Home
              </Link>
            </div>
            <div
              id="about-reel"
              className="flex items-start justify-center bg-purple-t"
            >
              <Link
                href="/about"
                className="-mt-[1vw] -ml-[4vw] h-fit rotate-[4deg] cursor-pointer px-[3vw] py-[2vw] transition duration-300 ease-in-out hover:scale-110 hover:text-white sm:mt-[0.5vw]"
              >
                Company
              </Link>
            </div>
            <div
              id="locations-reel"
              className="flex items-start justify-center bg-t"
            >
              <Link
                href="/locations"
                className="-ml-[4vw] mt-[1vw] h-fit rotate-[6deg] cursor-pointer px-[3vw] py-[2vw] transition duration-300 ease-in-out hover:scale-110 hover:text-white md:mt-[2vw]"
              >
                Locations
              </Link>
            </div>
            <div
              id="portfolio-reel"
              className="flex items-start justify-center bg-yellow-t"
            >
              <Link
                href="/portfolio"
                className="-ml-[6vw] mt-[1vw] h-fit -rotate-[6deg] cursor-pointer px-[3vw] py-[2vw] transition duration-300 ease-in-out hover:scale-110 hover:text-white md:mt-[2vw] lg:mt-[3vw]"
              >
                Portfolio
              </Link>
            </div>
            <div className="bg-t"></div>
            <div className="bg-t"></div>
            <div className="bg-t"></div>
            <div className="bg-t"></div>
            <div className="bg-t"></div>
            <div className="bg-t"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
