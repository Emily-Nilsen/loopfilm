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
        `h-${height} relative overflow-hidden py-20 sm:h-[60vh] sm:py-32 lg:pb-32 xl:pb-36`
      )}
    >
      <div className="absolute inset-0 bg-green-200">
        <Image
          priority
          className="object-cover"
          fill
          alt="The Beauty of Norway"
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto,f_auto/Loop%20Film/005512_Christian-Ringer_www.nordnorge.com_eq93yp.jpg"
          unoptimized
        />{' '}
      </div>
      <Container>
        <div className="relative">
          <div className="grid w-full h-full grid-cols-5">
            <div className="flex flex-col col-span-3 text-white sm:col-span-2">
              <h1 className="pt-10 mb-4 text-4xl font-semibold leading-10 tracking-tight sm:pt-0 sm:text-5xl sm:leading-tight">
                Capturing the natural beauty of Norway
              </h1>
              <h2 className="mt-[40vh] max-w-xs text-lg leading-tight  sm:mt-0 sm:leading-normal">
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
                    <span className="hidden lg:inline">
                      Contact us to learn more
                    </span>
                    <span className="lg:hidden">Contact us</span>
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
