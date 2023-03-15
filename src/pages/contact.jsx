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

export default function Contact() {
  return (
    <main className="relative">
      <Head>
        <title>Contact LoopFilm</title>
        <meta
          name="description"
          content="Experience top-quality film production service in Norway - with our dedicated team."
        />
        <meta
          name="keywords"
          content="Jarle Tangen, Per-Henry Borch, Per Henry Borch, Contact LoopFilm Productions AS, Film production services in Oslo, Ålesund, Aalesund, Frognerveien, Rerstadvegen, Video production in Oslo, Film equipment rental in Oslo, Cinematography in Oslo, Commercial film in Oslo, Corporate video in Oslo, Documentary film in Oslo, Motion graphics in Oslo, Sound design in Oslo, Location scouting in Oslo, Pre-production in Oslo, Post-production in Oslo, Film industry in Norway, Film industry in Scandinavia, Professional film production in Norway, High-quality video production in Norway, Experienced film crew in Norway, Creative team in Norway, Customer service in Norway, Client satisfaction in Norway, Sustainability in film production, LoopFilm AS in Oslo, Norway, Business inquiries, Collaboration opportunities"
        />
        <link rel="canonical" href="https://loopfilm.no/contact" />
      </Head>
      <Header />
      <div className="relative flex h-[450px] w-full items-center bg-gray-800 sm:h-[70vh] sm:max-h-[800px] sm:min-h-[600px]">
        <Container className="w-full">
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              type: 'fade',
            }}
            className="absolute inset-0 h-[450px] sm:h-[70vh] sm:max-h-[800px] sm:min-h-[600px]"
          >
            <Image
              priority
              fill
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/contactHero_tyxchd.webp"
              alt="Beautiful Norway"
              className="object-cover object-center"
              unoptimized
            />
            <div className="absolute top-0 h-full w-full bg-gradient-to-b from-black/80"></div>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                type: 'fade',
              }}
              className="absolute bottom-0 h-full w-full bg-gradient-to-t from-black/50"
            ></motion.div>
          </motion.div>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 200 }}
            transition={{
              delay: 0.8,
              duration: 0.7,
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
        <div className="relative z-10 mx-auto max-w-7xl pl-4 pr-8 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Contact LoopFilm
          </h1>
          <p className="text-warm-gray-500 mt-6 max-w-3xl text-xl">
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
