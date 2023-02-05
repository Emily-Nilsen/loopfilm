import Head from 'next/head'
import Link from 'next/link'

import { Header } from '@/components/Header'
import { LocationsHero } from '@/components/LocationsHero'
import { Norway } from '@/components/Norway'
import { LocationsGrid } from '@/components/LocationsGrid'

import { LocationsCta } from '@/components/LocationsCta'
import { LocationsFooter } from '@/components/LocationsFooter'

export default function Locations() {
  return (
    <>
      <Head>
        <title>Locations</title>
        <meta
          name="description"
          content="Unique locations and breathtaking views for your next film
          production."
        />
      </Head>
      <main>
        <Header />
        <LocationsHero />
        <Norway />
        <LocationsGrid />
      </main>
      <LocationsFooter />
    </>
  )
}
