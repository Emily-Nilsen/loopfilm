import { useId, useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { motion, useInView, useMotionValue } from 'framer-motion'
import { CldImage } from 'next-cloudinary'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export function Hero() {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setHeight(window.innerHeight)
  }, [])

  return (
    <div
      className={clsx(
        `h-${height} relative overflow-hidden py-20 sm:h-[60vh] sm:pt-32 lg:pb-20`
      )}
    >
      <div className="absolute inset-0 bg-gray-800">
        <Image
          priority
          className="object-cover"
          fill
          alt="The Beauty of Norway"
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto,f_auto/Loop%20Film/landing_page_ufbowp.webp"
          unoptimized
        />{' '}
      </div>
      <Container className="relative h-full z-1">
        <div className="grid w-full h-full grid-cols-5">
          <div className="flex flex-col justify-between col-span-3 text-white sm:col-span-2">
            <div>
              <p className="pt-10 mb-4 text-4xl font-semibold tracking-tight sm:pt-0 sm:text-5xl lg:text-6xl">
                Capturing the natural beauty of Norway
              </p>
            </div>
            <div>
              <h2 className="mt-[40vh] max-w-sm text-lg leading-tight sm:mt-0 sm:text-2xl sm:leading-normal">
                Unique locations and breathtaking views for your next film
                production.
              </h2>
              <div>
                <Link href="/contact">
                  <Button
                    type="submit"
                    color="rose"
                    className="flex-none w-full mt-10 sm:w-fit"
                  >
                    <span className="text-lg">Inquire now</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div>
        <p>View height: {height}px</p>
      </div>
    </div>
  )
}
