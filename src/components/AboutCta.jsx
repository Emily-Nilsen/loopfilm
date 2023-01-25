import Image from 'next/image'
import Link from 'next/link'

export function AboutCta() {
  return (
    <div className="relative overflow-hidden bg-gray-900 isolate">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Don’t hesitate to
            <br />
            contact us for references.
          </h2>
          <p className="max-w-xl mx-auto mt-6 text-lg leading-8 text-gray-300">
            We’re ready to discuss your project and help you create a
            masterpiece in Norway.
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <Link
              href="/contact"
              className="text-base font-semibold leading-7 text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient
            id="8d958450-c69f-4251-94bc-4e091a323369"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(512 512) rotate(90) scale(512)"
          >
            <stop stopColor="#d946ef" />
            <stop offset={1} stopColor="#e879f9" stopOpacity={0} />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}
