import Image from 'next/image'

const featuredTestimonial = {
  image:
    'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/workGallery-02_fphdlo.webp',
}
const testimonials = [
  [
    [
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/RA_bro2-kopi_stimib.webp',
        height: 'h-72',
      },
    ],
  ],
  [
    [
      {
        image:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/workGallery-07_qilvqo.webp',
        height: 'h-64',
      },
    ],
  ],
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function WorkGallery() {
  return (
    <div className="relative pb-6 bg-white isolate pt-28 sm:pb-16 sm:pt-32">
      <div className="absolute inset-x-0 overflow-hidden -translate-y-1/2 top-1/2 -z-10 transform-gpu opacity-30 blur-3xl">
        <svg
          viewBox="0 0 1313 771"
          aria-hidden="true"
          className="ml-[max(50%,38rem)] w-[82.0625rem]"
        >
          <path
            id="bc169a03-3518-42d4-ab1e-d3eadac65edc"
            fill="url(#85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3)"
            d="M360.508 589.796 231.671 770.522 0 498.159l360.508 91.637 232.034-325.485c1.485 150.396 51.235 393.965 238.354 165.069C1064.79 143.261 1002.42-107.094 1171.72 46.97c135.44 123.252 148.51 335.641 138.11 426.428L971.677 339.803l24.062 411.461-635.231-161.468Z"
          />
          <defs>
            <linearGradient
              id="85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3"
              x1="1313.17"
              x2="-88.881"
              y1=".201"
              y2="539.417"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f5d0fe" />
              <stop offset={1} stopColor="#f0abfc" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-x-0 top-0 flex pt-32 overflow-hidden opacity-25 -z-10 transform-gpu blur-3xl sm:pt-40 xl:justify-end">
        <svg
          viewBox="0 0 1313 771"
          aria-hidden="true"
          className="ml-[-22rem] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] xl:ml-0 xl:mr-[calc(50%-12rem)]"
        >
          <use href="#bc169a03-3518-42d4-ab1e-d3eadac65edc" />
        </svg>
      </div>
      <div className="px-6 mx-auto -mt-24 max-w-7xl sm:-mt-16 lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 mx-auto mt-16 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="relative block col-span-1 h-96 sm:col-span-2 sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
            <div className="absolute inset-0">
              <Image
                className="object-cover overflow-hidden rounded-2xl"
                fill
                src={featuredTestimonial.image}
                alt="Loop Film"
              />
            </div>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8'
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.image}
                      className={classNames(
                        'relative rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5',
                        testimonial.height
                      )}
                    >
                      <div className="absolute inset-0">
                        <Image
                          className="object-cover overflow-hidden rounded-2xl"
                          fill
                          src={testimonial.image}
                          alt="Loop Film"
                        />
                      </div>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
