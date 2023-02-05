import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { VideoHero } from '@/components/VideoHero'
import { WorkHero } from '@/components/WorkHero'
import { VideoGallery } from '@/components/VideoGallery'
import { Container } from '@/components/Container'
import { WorkCta } from '@/components/WorkCta'
import { WorkFooter } from '@/components/WorkFooter'

export default function Work() {
  return (
    <>
      <Head>
        <title>Past work</title>
        <meta
          name="description"
          content="Transform your vision into reality - with our film production services in Norway."
        />
      </Head>
      <Header />
      {/* <WorkHero /> */}
      <VideoHero />
      <main>
        <VideoGallery />
        {/* <WorkCta /> */}
      </main>
      <WorkFooter />
    </>
  )
}
