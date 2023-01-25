import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { AnimatePresence, motion } from 'framer-motion'

import { Header } from '../components/Header'
import { AboutHero } from '@/components/AboutHero'
import { LoopFilmDetails } from '@/components/LoopFilmDetails'
import { AboutFooter } from '@/components/AboutFooter'
import { Container } from '@/components/Container'
import { ClientCloud } from '@/components/ClientCloud'
import { AboutLoopFilm } from '@/components/AboutLoopFilm'
import { AboutCta } from '@/components/AboutCta'
import { AboutSeparator } from '@/components/AboutSeparator'
import { AboutUs } from '@/components/AboutUs'
import { AboutCtaTwo } from '@/components/AboutCtaTwo'

export default function About() {
  return (
    <>
      <Head>
        <title>About LoopFilm</title>
      </Head>
      <Header />

      <main>
        <AboutHero />
        <div className="-mt-6 sm:-mt-0">
          <AboutCta />
        </div>
        <LoopFilmDetails />

        <AboutCtaTwo />
      </main>

      <AboutFooter />
    </>
  )
}
