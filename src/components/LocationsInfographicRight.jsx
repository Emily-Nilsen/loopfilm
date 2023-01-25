import Image from 'next/image'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function LocationsInfographicRight({
  src,
  alt,
  title,
  description,
  bgColour,
}) {
  return (
    <div className="relative z-20 max-w-2xl">
      <div className="grid items-center grid-cols-3">
        <div className="col-span-2">
          <div className="flex flex-col w-full ml-10 bg-white rounded-lg shadow-lg shadow-gray-400/10">
            <div
              className={classNames(
                'overflow-hidden rounded-tl-lg bg-green-800/10 p-6 pr-24 text-lg font-semibold',
                bgColour
              )}
            >
              <h3>{title}</h3>
            </div>
            <div className="p-6 pr-24">
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative -ml-10 bg-gray-300 border-8 border-white rounded-full shadow-lg h-72 w-72">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover overflow-hidden rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
