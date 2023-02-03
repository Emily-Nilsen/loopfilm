import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { WorkHero } from '@/components/WorkHero'
import { VideoGallery } from '@/components/VideoGallery'
import { Container } from '@/components/Container'
import { WorkCta } from '@/components/WorkCta'
import { WorkFooter } from '@/components/WorkFooter'

export default function Work() {
  return (
    <>
      <Head>
        <title>Work - LoopFilm</title>
      </Head>
      <Header />
      <WorkHero />
      <main>
        <VideoGallery />
        {/* <WorkCta /> */}
      </main>
      <WorkFooter />
    </>
  )
}
