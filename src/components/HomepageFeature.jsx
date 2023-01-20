import Image from 'next/image'
import Link from 'next/link'
import { Button } from './Button'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'

function FeatureHeading() {
  return (
    <div className="bg-white">
      <div className="px-6 pb-6 mx-auto max-w-7xl sm:pb-10 lg:px-8">
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
        <div className="flex justify-center">
          <Link href="/contact">
            <div className="flex items-center px-3 py-2 my-10 space-x-2 text-lg font-medium text-gray-800 transition duration-300 ease-in-out bg-gray-100 rounded-lg group hover:bg-gray-50 hover:text-sky-pink">
              <p>Get in touch and bring your film to life</p>
              <ArrowLongRightIcon className="w-6 h-6 text-gray-500 transition duration-300 ease-in-out group-hover:text-sky-pink" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export function HomepageFeature() {
  return (
    <section className="py-16 sm:py-24">
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
        </div>
      </div>
    </section>
  )
}
