import Head from 'next/head'
import { Header } from '@/components/Header'
import { ClientCloud } from '@/components/ClientCloud'
import { ClientCloudStatic } from '@/components/ClientCloudStatic'
import { ClientsFooter } from '@/components/ClientsFooter'
import { Footer } from '@/components/Footer'

export default function Clients() {
  return (
    <>
      <Head>
        <title>Our clients</title>
        <meta
          name="description"
          content="Innovative film service production company in Norway - delivering creative solutions."
        />
      </Head>
      <Header />
      <main>
        {/* <ClientCloudStatic /> */}
        <ClientCloud />
        <ClientsFooter />
      </main>
      {/* <Footer /> */}
    </>
  )
}
