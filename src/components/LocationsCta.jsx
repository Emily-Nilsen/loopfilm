import Image from 'next/image'
import Link from 'next/link'

export function LocationsCta() {
  return (
    <div className="pb-16 my-24 bg-gradient-to-r from-teal-500 to-cyan-600 sm:my-32 lg:relative lg:z-10 lg:pb-0">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
        <div className="relative lg:-my-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 bg-white h-1/2 lg:hidden"
          />
          <div className="max-w-md px-6 mx-auto sm:max-w-3xl lg:h-full lg:p-0">
            <div className="relative overflow-hidden shadow-xl aspect-w-10 aspect-h-6 rounded-xl sm:aspect-w-16 sm:aspect-h-7 lg:h-full ">
              <Image
                className="object-cover overflow-hidden rounded-xl"
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/cameraman_ssofrk.webp"
                alt="Camera man"
                width={4200}
                height={2800}
              />
            </div>
          </div>
        </div>
        <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
          <div className="px-6 py-10 sm:py-24 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold tracking-tight text-white">
                Don’t hesitate to
                <br />
                contact us for references.
              </h2>
              <p className="max-w-xl mt-6 text-lg leading-8 text-white/90">
                We’re ready to discuss your project and help you create a
                masterpiece in Norway.
              </p>
              <div className="flex items-center mt-10 gap-x-6">
                <Link
                  href="/portfolio"
                  className="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  See our past work
                </Link>
                <Link
                  href="/contact"
                  className="text-base font-semibold leading-7 text-white"
                >
                  Get in touch <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
