import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { ContactGallery } from '@/components/ContactGallery'
import { OurOffices } from '@/components/OurOffices'
import { ContactFooter } from '@/components/ContactFooter'
import { CameraFrame } from '@/components/CameraFrame'

export default function Contact() {
  return (
    <main className="relative">
      <Head>
        <title>Contact Us - LoopFilm</title>
      </Head>
      <Header />
      <div className="relative flex h-[450px] w-full items-center bg-gray-800 sm:h-[70vh] sm:min-h-[600px]">
        <Container className="w-full">
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              type: 'fade',
            }}
            className="absolute inset-0 h-[450px] sm:h-[70vh] sm:min-h-[600px]"
          >
            <Image
              priority
              fill
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/003528_Tofoto_www.nordnorge.com_a4ygqu.jpg"
              alt="Beautiful Norway"
              className="object-cover object-center"
              unoptimized
            />
            <div className="absolute top-0 w-full h-full bg-gradient-to-b from-black/80"></div>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                type: 'fade',
              }}
              className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black/50"
            ></motion.div>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 2.5,
                duration: 0.8,
                type: 'fade',
              }}
              className="absolute top-0 flex items-center justify-center w-full h-full"
            >
              <CameraFrame className="lg:max-h-none h-auto max-h-[400px] w-5/6 fill-white/40 stroke-white/50" />
            </motion.div>
          </motion.div>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 200 }}
            transition={{
              delay: 0.8,
              duration: 1.5,
              type: 'fade',
              ease: 'linear',
            }}
            className="relative flex"
          >
            <h2 className="max-w-xs text-2xl font-semibold tracking-tight text-white sm:max-w-2xl sm:text-3xl lg:text-4xl">
              Elevate your film production to new heights
            </h2>
          </motion.div>
        </Container>
      </div>

      {/* Title */}
      <div className="pt-16 sm:pt-24 lg:pt-32">
        <div className="relative z-10 pl-4 pr-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Contact us today
          </h1>
          <p className="max-w-3xl mt-6 text-xl text-warm-gray-500">
            Don’t hesitate to reach out to us for your next film production.
            We’re here to help bring your vision to life in the beautiful
            landscapes of Norway.
          </p>
        </div>
      </div>

      {/* Image gallery */}
      <div className="mb-6 sm:mb-16 lg:mb-24">
        <ContactGallery />
      </div>

      {/* Offices */}
      <div className="relative">
        <OurOffices />
      </div>
      <ContactFooter />
    </main>
  )
}
