import Head from 'next/head'
import { Header } from '@/components/Header'
import { ClientCloud } from '@/components/ClientCloud'
import { ClientsCta } from '@/components/ClientsCta'

export default function Clients() {
  return (
    <>
      <Head>
        <title>About LoopFilm</title>
      </Head>
      <Header />
      <main>
        <ClientCloud />
        <ClientsCta />
      </main>
    </>
  )
}
