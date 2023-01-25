import Link from 'next/link'
import { Container } from './Container'

export function AboutCtaTwo() {
  return (
    <div className="bg-white">
      <Container>
        <div className="px-6 pb-16 mx-auto max-w-7xl sm:pb-24 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Take your film production to the next level{' '}
            <br className="hidden sm:block" />
            with our full-service offerings.
          </h2>
          <div className="flex items-center mt-10 gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <Link
              href="/portfolio"
              className="rounded-md bg-fuchsia-100 px-3.5 py-1.5 text-base font-semibold leading-7 text-fuchsia-900 shadow-sm transition duration-300 ease-in-out hover:bg-fuchsia-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600"
            >
              View our past work
            </Link>
            <Link
              href="/contact"
              className="text-base font-semibold leading-7 text-gray-900"
            >
              Contact us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

// import Link from 'next/link'
// export function AboutCtaTwo() {
//   return (
//     <div className="bg-white">
//       <div className="py-24 mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8">
//         <div className="relative px-6 py-24 overflow-hidden text-center bg-gray-900 shadow-2xl isolate sm:rounded-3xl sm:px-16">
//           <h2 className="max-w-2xl mx-auto text-4xl font-bold tracking-tight text-white">
//             Take your film production to Norway <br />
//             with our full-service offerings.
//           </h2>
//           <p className="max-w-xl mx-auto mt-6 text-lg leading-8 text-gray-300">
//             Contact LoopFilm today. We’ll help you find the right location,
//             crew, and equipment for your production.
//           </p>
//           <div className="flex items-center justify-center mt-10 gap-x-6">
//             <Link
//               href="/portfolio"
//               className="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
//             >
//               View our past work
//             </Link>
//             <Link
//               href="/contact"
//               className="text-base font-semibold leading-7 text-white"
//             >
//               Contact us <span aria-hidden="true">→</span>
//             </Link>
//           </div>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 1024 1024"
//             className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
//             aria-hidden="true"
//           >
//             <circle
//               cx={512}
//               cy={512}
//               r={512}
//               fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
//               fillOpacity="0.7"
//             />
//             <defs>
//               <radialGradient
//                 id="827591b1-ce8c-4110-b064-7cb85a0b1217"
//                 cx={0}
//                 cy={0}
//                 r={1}
//                 gradientUnits="userSpaceOnUse"
//                 gradientTransform="translate(512 512) rotate(90) scale(512)"
//               >
//                 <stop stopColor="#7775D6" />
//                 <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
//               </radialGradient>
//             </defs>
//           </svg>
//         </div>
//       </div>
//     </div>
//   )
// }
