import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { LogoCloud } from '@/components/LogoCloud'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SiteMenuFeature } from '@/components/SiteMenuFeature'

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
        <LogoCloud />
        {/* <PrimaryFeatures /> */}
        <SiteMenuFeature />
        <div className="pt-24"></div>

        {/* <CallToAction /> */}
      </main>
      <Footer />
    </div>
  )
}
