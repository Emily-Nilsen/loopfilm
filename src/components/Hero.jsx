import { useId, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { motion, useInView, useMotionValue } from 'framer-motion'
import { CldImage } from 'next-cloudinary'

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export function Hero() {
  return (
    <div className="relative min-h-[90vh] overflow-hidden py-20 sm:min-h-[60vh] sm:py-32 lg:pb-32  xl:pb-36">
      <div className="absolute inset-0">
        <CldImage
          priority
          className="object-cover"
          // fill
          width={5906}
          height={3930}
          alt="The Beauty of Norway"
          src="Loop%20Film/005512_Christian-Ringer_www.nordnorge.com_eq93yp.jpg"
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
            {/* <div className="flex self-end h-full col-span-3 col-start-1 text-white">
              <div className="flex justify-between w-full">
                <div className="">Service 1</div>
                <div className="">Service 2</div>
                <div className="">Service 3</div>
              </div>
            </div> */}
          </div>
        </div>
      </Container>
    </div>
  )
}
