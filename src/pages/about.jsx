import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { AnimatePresence, motion } from 'framer-motion'

import { Header } from '../components/Header'
import { AboutHero } from '@/components/AboutHero'
import { LoopFilmDetails } from '@/components/LoopFilmDetails'
import { AboutFooter } from '@/components/AboutFooter'
import { Container } from '@/components/Container'
import { AboutLoopFilm } from '@/components/AboutLoopFilm'
import { AboutCta } from '@/components/AboutCta'
import { AboutUs } from '@/components/AboutUs'

export default function About() {
  return (
    <>
      <Head>
        <title>About LoopFilm</title>
      </Head>
      <Header />

      {/* <main className="relative bg-black/50 pt-[5vw] pb-[35vw]">
        <div className="absolute inset-0">
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              type: 'fade',
            }}
            className="relative w-full h-full"
          >
            <Image
              priority
              className="object-cover object-bottom"
              alt="Beautiful Northern Norway"
              fill
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/LoopFilm_company_only_j4u8e8.webp"
              unoptimized
            />
          </motion.div>
        </div>
        <div id="content" className="py-16 pb-80">
          <Container className="relative h-full z-1">
            <div className="flex flex-col justify-between h-full py-0">
              <div className="bg-t">
                <AboutLoopFilm />
              </div>
              <div className="flex items-center justify-center h-40 bg-t">
                <h1 className="max-w-md text-2xl font-medium tracking-tight text-center text-white/90 sm:text-3xl">
                  Bringing 20+ years of experience to the Norwegian film
                  industry
                </h1>
              </div>
            </div>
          </Container>
        </div>
      </main> */}
      <section>
        <AboutHero />
        <LoopFilmDetails />
        <AboutCta />
      </section>
      <section className="relative">
        <AboutUs />
      </section>

      <AboutFooter />
    </>
  )
}
