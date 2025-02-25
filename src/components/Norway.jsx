import Image from 'next/image'
import Link from 'next/link'

export function Norway() {
  return (
    <div className="relative bg-white lg:mt-10">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 sm:pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-5xl lg:text-6xl">
              Discover why Norway has everything you need for your next film
              production
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From fjords to glaciers, forests to beaches, and snow-capped
              mountains to lakes, Norway offers the perfect filming locations.
            </p>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <div className="-mt-12 sm:mt-0">
            <Image
              className="lg:aspect-auto w-full bg-white object-contain sm:aspect-[3/2] lg:absolute lg:inset-0 lg:h-full"
              src="/media/collage-transparent_eovpsp.webp"
              alt="Norway"
              width={1365}
              height={1525}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
