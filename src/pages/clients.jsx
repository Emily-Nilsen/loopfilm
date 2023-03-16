import Head from 'next/head'
import { Header } from '@/components/Header'
import { ClientCloud } from '@/components/ClientCloud'

import { ClientsFooter } from '@/components/ClientsFooter'
import { Footer } from '@/components/Footer'

export default function Clients() {
  return (
    <>
      <Head>
        <title>Our clients</title>
        <meta
          name="description"
          content="Innovative film production service company in Norway - delivering creative solutions."
        />
        <meta
          name="keywords"
          content="General Motors, Napapijri, BMW, Biotherm, Allstate, Esselunga, Apple, Lotto, Peugeot, Eurosport, Saga Holidays, Amazon, Infiniti, Alfa Romeo, Universal - Ex_Machina, Ferrari, Porsche, Ford, My Heritage, CitiBank, Three Mobile, Toyota, Marriott, Adidas, Mitsubishi, Subaru, General Electric, Sharp, Jeep, Warner Bros Pictures, Lexus, Volvo, Findus, HM Government, Telenor"
        />
        <link rel="canonical" href="https://loopfilm.no/clients" />
      </Head>
      <Header />
      <main>
        <ClientCloud />
        <ClientsFooter />
      </main>
      {/* <Footer /> */}
    </>
  )
}
