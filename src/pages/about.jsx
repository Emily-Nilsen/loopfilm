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
