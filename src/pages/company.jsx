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
import { WorkGallery } from '@/components/WorkGallery'

import { Jarle } from '@/components/Jarle'

export default function About() {
  return (
    <>
      <Head>
        <title>About LoopFilm</title>
        <meta
          name="description"
          content="First-rate film production services in Norway - bringing your ideas to the screen."
        />
        <link rel="canonical" href="https://loopfilm.no/company" />
      </Head>
      <Header />

      <main>
        <AboutHero />

        <LoopFilmDetails />

        <Jarle />

        <WorkGallery />
      </main>

      <AboutFooter />
    </>
  )
}
