import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'

import { HomepageFooter } from '@/components/HomepageFooter'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { LogoCloud } from '@/components/LogoCloud'
import { HomepageFeature } from '@/components/HomepageFeature'
import { MemberLogoCloud } from '@/components/MemberLogoCloud'

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
        <HomepageFeature />
        <MemberLogoCloud />
      </main>
      <HomepageFooter />
    </div>
  )
}
