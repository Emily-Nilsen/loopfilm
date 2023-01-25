import Image from 'next/image'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function AboutInfographicRight({
  src,
  alt,
  title,
  description,
  bgColour,
}) {
  return (
    <div className="relative z-20 max-w-2xl">
      {/* mobile screens */}
      <div className="grid items-center grid-cols-1 sm:hidden">
        <div className="col-span-1">
          <div className="relative w-full h-full bg-gray-300 border-8 border-white rounded-full shadow-lg sm:ml-6 sm:h-72 sm:w-72 lg:ml-10">
            <Image
              src={src}
              alt={alt}
              width={300}
              height={300}
              className="object-cover object-center w-full h-full overflow-hidden rounded-full"
            />
          </div>
        </div>
        <div className="col-span-1 px-3 sm:col-span-2 sm:px-0">
          <div className="flex flex-col w-full -mt-32 bg-white rounded-lg shadow-lg shadow-gray-400/10 sm:mx-0 sm:-mt-0">
            <div
              className={classNames(
                'overflow-hidden rounded-tr-lg bg-green-800/10 px-6 pb-6 pt-40 text-lg font-semibold sm:py-6 sm:pr-4 sm:pl-28',
                bgColour
              )}
            >
              <h3>{title}</h3>
            </div>
            <div className="px-6 py-6 sm:pr-5 sm:pl-28">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ipad and up */}
      <div className="items-center hidden grid-cols-1 sm:grid sm:grid-cols-3">
        <div className="col-span-1 sm:col-span-2">
          <div className="flex flex-col w-full ml-10 bg-white rounded-lg shadow-lg shadow-gray-400/10 sm:grow lg:grow-0">
            <div
              className={classNames(
                'overflow-hidden rounded-tl-lg bg-green-800/10 p-6 text-lg font-semibold sm:pr-16 lg:pr-24',
                bgColour
              )}
            >
              <h3>{title}</h3>
            </div>
            <div className="p-6 sm:pr-16 lg:pr-24">
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative flex w-full h-full bg-gray-300 border-8 border-white rounded-full shadow-lg grow-0 sm:-ml-4 sm:h-72 sm:w-72 lg:-ml-10">
            <Image
              src={src}
              alt={alt}
              width={300}
              height={300}
              className="object-cover w-full h-full overflow-hidden rounded-full "
            />
          </div>
        </div>
      </div>
    </div>
  )
}
