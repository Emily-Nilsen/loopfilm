import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
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

import { FerrariHorseLogo } from '@/components/Logos'
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
import { UniversalLogo } from '@/components/Logos'
import { FordLogo } from '@/components/Logos'
import { CitibankLogo } from '@/components/Logos'
import { ThreeLogo } from '@/components/Logos'
import { ToyotaLogo } from '@/components/Logos'
import { MarriottLogo } from '@/components/Logos'
import { SubaruLogo } from '@/components/Logos'
import { GeneralElectricLogo } from '@/components/Logos'
import { SharpLogo } from '@/components/Logos'
import { MyHeritageLogo } from '@/components/Logos'
import { AdidasLogo } from '@/components/Logos'
import { MitsubishiLogo } from '@/components/Logos'
import { JeepLogo } from '@/components/Logos'
import { WarnerBrosLogo } from '@/components/Logos'
import { LexusLogo } from '@/components/Logos'
import { CQMagazineLogo } from '@/components/Logos'
import { FindusLogo } from '@/components/Logos'
import { HMGovernmentLogo } from '@/components/Logos'
import { TelenorLogo } from '@/components/Logos'
import { VolvoLogo } from '@/components/Logos'

const reviews = [
  {
    id: 1,
    alt: 'General Motors',
    logo: <GeneralMotorsLogo className="h-12 max-h-12 fill-white" />,
  },
  {
    id: 2,
    alt: 'Napapijri',
    logo: <NapapijriLogo className="h-12 max-h-7 fill-white" />,
  },
  {
    id: 3,
    alt: 'BMW',
    logo: <BmwLogo className="h-12 max-h-12 fill-white" />,
  },
  {
    id: 4,
    alt: 'Biotherm',
    logo: <BiothermLogo className="h-10 max-h-10 fill-white" />,
  },
  {
    id: 5,
    alt: 'Allstate',
    logo: <AllstateLogo className="h-8 max-h-8 fill-white" />,
  },
  {
    id: 6,
    alt: 'Esselunga',
    logo: <EsselungaLogo className="h-5 max-h-5 fill-white" />,
  },
  {
    id: 7,
    alt: 'Apple',
    logo: <AppleLogo className="h-10 max-h-10 fill-white" />,
  },
  {
    id: 8,
    alt: 'Lotto',
    logo: <LottoLogo className="h-8 max-h-8 fill-white" />,
  },
  {
    id: 9,
    alt: 'Peugeot',
    logo: <PeugeotLogo className="h-6 max-h-6 fill-white" />,
  },
  {
    id: 10,
    alt: 'Eurosport',
    logo: <EurosportLogo className="h-5 max-h-5 fill-white" />,
  },
  {
    id: 11,
    alt: 'Saga Holidays',
    logo: <SagaHolidaysLogo className="h-6 max-h-6 fill-white" />,
  },
  {
    id: 12,
    alt: 'Amazon',
    logo: <AmazonLogo className="h-8 max-h-8 fill-white" />,
  },
  {
    id: 13,
    alt: 'Infiniti',
    logo: <InfinitiLogo className="h-12 max-h-10 fill-white" />,
  },
  {
    id: 14,
    alt: 'Alfa Romeo',
    logo: <AlphaRomeoLogo className="h-12 max-h-10 fill-white" />,
  },
  {
    id: 15,
    alt: 'Universal - Ex_Machina',
    logo: <UniversalLogo className="h-12 max-h-12 fill-white" />,
  },
  {
    id: 16,
    alt: 'Ferrari',
    logo: <FerrariLogo className="h-6 max-h-6 fill-white" />,
  },
  {
    id: 17,
    alt: 'Porsche',
    logo: <PorscheLogo className="max-w-40 w-40 fill-white" />,
  },
  {
    id: 18,
    alt: 'Ford Noruega',
    logo: <FordLogo className="h-10 max-h-10 fill-white" />,
  },
  {
    id: 19,
    alt: 'My Heritage',
    logo: <MyHeritageLogo className="h-8 max-h-8 fill-white" />,
  },
  {
    id: 20,
    alt: 'CitiBank',
    logo: <CitibankLogo className="h-7 max-h-7 fill-white" />,
  },
  {
    id: 21,
    alt: 'Three Mobile',
    logo: <ThreeLogo className="h-12 max-h-12 fill-white" />,
  },
  {
    id: 22,
    alt: 'Toyota',
    logo: <ToyotaLogo className="h-7 max-h-7 fill-white" />,
  },
  {
    id: 23,
    alt: 'Marriott Vikings',
    logo: <MarriottLogo className="h-10 max-h-10 fill-white" />,
  },
  {
    id: 24,
    alt: 'Adidas',
    logo: <AdidasLogo className="h-7 max-h-7 fill-white" />,
  },
  {
    id: 25,
    alt: 'Mitsubishi',
    logo: <MitsubishiLogo className="h-12 max-h-12 fill-white" />,
  },
  {
    id: 26,
    alt: 'Subaru',
    logo: <SubaruLogo className="h-7 max-h-7 fill-white" />,
  },
  {
    id: 27,
    alt: 'General Electric',
    logo: <GeneralElectricLogo className="h-5 max-h-5 fill-white" />,
  },
  {
    id: 28,
    alt: 'Sharp',
    logo: <SharpLogo className="h-5 max-h-5 fill-white" />,
  },
  {
    id: 29,
    alt: 'Jeep',
    logo: <JeepLogo className="h-8 max-h-8 fill-white" />,
  },
  {
    id: 30,
    alt: 'Warner Bros Pictures',
    logo: <WarnerBrosLogo className="h-12 max-h-12 fill-white" />,
  },
  {
    id: 31,
    alt: 'Lexus',
    logo: <LexusLogo className="h-7 max-h-7 fill-white" />,
  },
  {
    id: 32,
    alt: 'CQ Magazine',
    logo: <CQMagazineLogo className="h-8 max-h-8 fill-white" />,
  },
  {
    id: 33,
    alt: 'Findus',
    logo: <FindusLogo className="h-9 max-h-9 fill-white" />,
  },
  {
    id: 34,
    alt: 'HM Government',
    logo: <HMGovernmentLogo className="h-10 max-h-10 fill-white" />,
  },
  {
    id: 35,
    alt: 'Telenor',
    logo: <TelenorLogo className="h-8 max-h-8 fill-white" />,
  },
  {
    id: 36,
    alt: 'Volvo',
    logo: <VolvoLogo className="h-5 max-h-5 fill-white" />,
  },
]

function Review({ id, alt, logo, className, ...props }) {
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
          'relative h-28 animate-fade-in rounded-none bg-gray-800 p-6 opacity-0 shadow-md shadow-gray-900/5',
          className
        )}
        style={{ animationDelay }}
        {...props}
      >
        <div
          role="img"
          alt={alt}
          className="absolute bottom-0 left-0 z-20 flex h-20 w-full items-center justify-center self-end bg-gradient-to-t from-gray-900 p-4"
        >
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
  let isInView = useInView(containerRef, { once: true, amount: 0 })
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
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-900" />
    </div>
  )
}

export function ClientCloud() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="isolate bg-gray-900"
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto my-12 max-w-2xl text-center sm:my-20">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              <span className="text-fuchsia-200">Loop</span>Film{' '}
            </h1>
            <h1 className="pt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              The professional choice for filming in Norway
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Our clients trust us to deliver high-quality results every time.
            </p>
          </div>
          <ReviewGrid />
        </div>
      </div>
    </section>
  )
}
