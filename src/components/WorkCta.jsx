import Link from 'next/link'

export function WorkCta() {
  return (
    <div className="bg-white">
      <div className="px-6 py-6 mx-auto max-w-7xl sm:py-12 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          Collaborate with LoopFilm AS
          <br />
          for stunning film production.
        </h2>
        <div className="flex items-center mt-10 gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Link
            href="/contact"
            className="rounded-md bg-red-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm transition duration-300 ease-in-out hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Contact us
          </Link>
          <Link
            href="/about"
            className="text-base font-semibold leading-7 text-gray-900 transition duration-300 ease-in-out hover:text-gray-700"
          >
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
