import Head from 'next/head'
import Link from 'next/link'

import { Header } from '@/components/Header'
import { LocationsHero } from '@/components/LocationsHero'
import { Norway } from '@/components/Norway'
import { LocationsGrid } from '@/components/LocationsGrid'
import { CollageOfNorway } from '@/components/CollageOfNorway'

import { LocationsCta } from '@/components/LocationsCta'
import { LocationsFooter } from '@/components/LocationsFooter'

export default function Locations() {
  return (
    <>
      <Head>
        <title>Locations - LoopFilm</title>
      </Head>
      {/* <main>
        <div className="flex items-center justify-center w-full h-screen">
          <div className="text-center">
            <p className="my-6 text-lg font-bold text-gray-900">Locations</p>
            <Link href="/" className="text-gray-500">
              Back to homepage
            </Link>
          </div>
        </div>
      </main> */}
      <main>
        <Header />
        <LocationsHero />
        <Norway />
        <LocationsGrid />
        {/* <CollageOfNorway /> */}
      </main>
      <LocationsFooter />
    </>
  )
}
