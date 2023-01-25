import Image from 'next/image'

export function AboutSeparator() {
  return (
    <div className="relative h-96">
      <div className="absolute inset-0">
        <Image
          className="h-full w-full object-cover object-center"
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1674593146/Loop%20Film/separator_wcsjiq.webp"
          fill
          alt=""
        />
        {/* <div
          className="absolute inset-0 bg-indigo-800 mix-blend-multiply"
          aria-hidden="true"
        /> */}
      </div>
      {/* cta */}
    </div>
  )
}
