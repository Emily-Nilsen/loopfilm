import Head from 'next/head'
import { Header } from '@/components/Header'
import { Reviews } from '@/components/Reviews'
import { ClientsCta } from '@/components/ClientsCta'

export default function Clients() {
  return (
    <>
      <Head>
        <title>About LoopFilm</title>
      </Head>
      <Header />
      <main>
        {/* <ClientHero /> */}
        <Reviews />
        <ClientsCta />
      </main>
    </>
  )
}
