import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { AnimatePresence, motion } from 'framer-motion'

import { Header } from '../components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'
import { AboutLoopFilm } from '@/components/AboutLoopFilm'
import { AboutUs } from '@/components/AboutUs'

export default function About() {
  return (
    <div className="relative">
      <Head>
        <title>About LoopFilm</title>
      </Head>
      <Header />

      <main className="bg-black/50">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              priority
              className="object-cover"
              alt="Beautiful Northern Norway"
              fill
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto,f_auto/Loop%20Film/about_page_background_v2_ixu8pi.webp"
              unoptimized
            />
          </div>
        </div>
        <div id="content" className="">
          <Container className="relative h-full z-1">
            <div className="flex flex-col justify-between h-full py-40">
              <div className="bg-t">
                <AboutLoopFilm />
              </div>
              <div className="flex items-center justify-center bg-t h-96">
                <h1 className="max-w-md text-2xl italic font-medium tracking-tight text-center text-white sm:text-3xl">
                  Bringing 20+ years of experience to the Norwegian film
                  industry
                </h1>
              </div>
              <div className="bg-t">
                <AboutUs />
              </div>
            </div>
          </Container>
        </div>
      </main>

      <Footer />
    </div>
  )
}
