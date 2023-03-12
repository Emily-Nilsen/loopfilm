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
          content="Elevate your film production experience in Norway with our superior services."
        />
        <link rel="canonical" href="https://loopfilm.no" />
      </Head>
      <Header />
      <main>
        <Hero />

        <div className="overflow-x-hidden">
          <HomepageFeature />
        </div>
        <MemberLogoCloud />
      </main>
      <HomepageFooter />
    </div>
  )
}
