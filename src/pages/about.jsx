import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { AnimatePresence, motion } from 'framer-motion'

import { Header } from '../components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'
import { AboutLoopFilm } from '@/components/AboutLoopFilm'

export default function About() {
  return (
    <div className="relative">
      <Head>
        <title>About Us - LoopFilm</title>
      </Head>
      <Header />

      <main className="bg-black/50">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              className="object-cover"
              alt="Beautiful Northern Norway"
              fill
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto,f_auto/Loop%20Film/LoopFilm_background_v2_isu7w9.jpg"
              unoptimized
            />
          </div>
        </div>
        <div id="content" className="">
          <Container className="relative h-full z-1">
            <div className="flex flex-col justify-between h-full py-40">
              <div className="bg-green-200/10">
                <AboutLoopFilm />
              </div>
              <div className="bg-yellow-200/50">Middle content</div>
              <div className="mb-20 bg-pink-100/10">
                <AboutLoopFilm />
              </div>
            </div>
          </Container>
        </div>
      </main>

      <Footer />
    </div>
  )
}
