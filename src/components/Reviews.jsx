import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

import { GeneralMotorsLogo } from '@/components/Logos'
import { BiothermLogo } from '@/components/Logos'
import { EurosportLogo } from '@/components/Logos'
import { SagaHolidaysLogo } from '@/components/Logos'
import { AllstateLogo } from '@/components/Logos'
import { LottoLogo } from '@/components/Logos'
import { PeugeotLogo } from '@/components/Logos'
import { NapapijriLogo } from '@/components/Logos'
import { EsselungaLogo } from '@/components/Logos'
import { InfinitiLogo } from '@/components/Logos'
import { PorscheLogo } from '@/components/Logos'
import { AppleLogo } from '@/components/Logos'
import { BmwLogo } from '@/components/Logos'
import { FerrariLogo } from '@/components/Logos'
import { AmazonLogo } from '@/components/Logos'
import { AlphaRomeoLogo } from '@/components/Logos'

const reviews = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/bmw-large_rbr1c8.webp',
    alt: 'General Motors',
    logo: <GeneralMotorsLogo className="h-12 max-h-12 fill-white" />,
    link: '',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/Napapijri-large_ez7sne.webp',
    alt: 'Napapijri',
    logo: <NapapijriLogo className="h-12 max-h-7 fill-white" />,
    link: '',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/Bmw-large_mxsd4y.webp',
    alt: 'BMW',
    logo: <BmwLogo className="h-12 max-h-12 fill-white" />,
    link: '',
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/biotherm-large_exjyfe.webp',
    alt: 'Biotherm',
    logo: <BiothermLogo className="h-12 max-h-12 fill-white" />,
    link: '',
  },
  {
    id: 5,
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/Allstate-large_gjdlvn.webp',
    alt: 'Allstate',
    logo: <AllstateLogo className="h-12 max-h-10 fill-white" />,
    link: '',
  },
  {
    id: 9,
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/pegueot-large_wopox3.webp',
    alt: 'Peugeot',
    logo: <PeugeotLogo className="h-12 max-h-12 fill-white" />,
    link: '',
  },
  {
    id: 6,
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/essalunga-large_xogjph.webp',
    alt: 'Esselunga',
    logo: <EsselungaLogo className="h-12 max-h-6 fill-white" />,
    link: '',
  },
  {
    id: 7,
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/apple-large_yy5gds.webp',
    alt: 'Apple',
    logo: <AppleLogo className="h-12 max-h-12 fill-white" />,
    link: '',
  },
  {
    id: 8,
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/lotto-large_urvvxz.webp',
    alt: 'Lotto',
    logo: <LottoLogo className="h-12 max-h-10 fill-white" />,
    link: '',
  },
  {
    id: 10,
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/eurosport-large_xax0ao.webp',
    alt: 'Eurosport',
    logo: <EurosportLogo className="h-12 max-h-6 fill-white" />,
    link: '',
  },
  {
    id: 11,
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1674725050/Loop%20Film/sagaHolidays-large_zg4wye.webp',
    alt: 'Saga Holidays',
    logo: <SagaHolidaysLogo className="h-12 max-h-8 fill-white" />,
    link: '',
  },
  {
    id: 12,
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/Amazon-large_m2w6kr.webp',
    alt: 'Amazon',
    logo: <AmazonLogo className="h-12 max-h-10 fill-white" />,
    link: '',
  },
  {
    id: 13,
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/infiniti_fmqpxj.webp',
    alt: 'Infiniti',
    logo: <InfinitiLogo className="h-12 max-h-10 fill-white" />,
    link: '',
  },
  {
    id: 14,
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/peugeotOculus_ahonyu.webp',
    alt: 'Peugeot Oculus',
    logo: <PeugeotLogo className="h-12 max-h-10 fill-white" />,
    link: '',
  },
]

function Review({ id, image, alt, logo, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <>
      <div
        className={clsx(
          'relative h-52 animate-fade-in rounded-3xl bg-gray-800 p-6 opacity-0 shadow-md shadow-gray-900/5',
          className
        )}
        style={{ animationDelay }}
        {...props}
      >
        <Image
          src={image}
          alt={alt}
          className="object-cover object-center"
          fill
          unoptimized={true}
        />
        <div className="absolute bottom-0 left-0 z-20 flex items-end self-end justify-start w-full h-20 px-4 bg-gradient-to-t from-gray-900">
          {logo}
        </div>
      </div>
    </>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  className,
  reviews,
  reviewClassName = () => {},
  msPerPixel = 0,
}) {
  let columnRef = useRef()
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current.offsetHeight)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef()
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  columns = [columns[0], columns[1], splitArray(columns[2], 2)]

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden bg-gray-900 px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                  'md:hidden',
                reviewIndex >= columns[0].length && 'lg:hidden'
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...columns[1], ...columns[2][1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length && 'lg:hidden'
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={columns[2].flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="absolute inset-x-0 top-0 h-32 pointer-events-none bg-gradient-to-b from-gray-900" />
      <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none bg-gradient-to-t from-gray-900" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="bg-gray-900 isolate"
    >
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#f4773080-2a16-4ab4-9fd7-579fec69a4f7)"
            fillOpacity=".2"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="f4773080-2a16-4ab4-9fd7-579fec69a4f7"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative py-24 sm:py-32 lg:pb-40">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto my-16 text-center sm:my-24">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              <span className="text-fuchsia-200">Loop</span>Film{' '}
              <span className="text-fuchsia-200">AS</span>
            </h1>
            <h1 className="pt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              The professional choice for filming in Norway
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-lg leading-8 text-gray-300">
              Our clients trust us to deliver high-quality results every time.
            </p>
          </div>
          <ReviewGrid />
        </div>
      </div>
      {/* <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ee0717bf-3e43-49df-b1bd-de36422ed3d3)"
            fillOpacity=".2"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ee0717bf-3e43-49df-b1bd-de36422ed3d3"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div> */}
    </section>
  )
}
