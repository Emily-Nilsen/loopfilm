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
        <title>LoopFilm - Film production service company in Norway</title>
        <meta
          name="description"
          content="Experience seamless filming in Norway with LoopFilm - Norway’s leading film production service company"
        />
        <meta
          name="keywords"
          content="filming norway, filming in Norway, Film production services, Film production services Norway, Video production, Film editing, Cinematography, Commercial film, Corporate video, Documentary film, Motion graphics, Sound design, Location scouting, Pre-production, Post-production, Film equipment rental, Oslo, Norway, LoopFilm AS, LoopFilm Productions AS"
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
