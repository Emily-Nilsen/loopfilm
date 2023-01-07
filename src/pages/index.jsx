import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

import { PrimaryFeatures } from '@/components/PrimaryFeatures'

export default function Home() {
  return (
    <div className="relative">
      <Head>
        <title>LoopFilm - Capturing the natural beauty of Norway</title>
        <meta
          name="description"
          content="Unique locations and breathtaking views for your next film
          production."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />

        {/* <CallToAction /> */}
      </main>
      <Footer />
    </div>
  )
}
