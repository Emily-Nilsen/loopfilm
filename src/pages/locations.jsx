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
        <meta
          name="keywords"
          content="Oslo, Norway, Nordic countries, Scandinavia, Arctic Circle, Fjords, Mountains, Northern Lights, Snow, Snowscapes, Snowy landscapes, Snowy mountains, Bridges, Windy roads, Curving roads, Picturesque, Tundra, Forests, Lakes, Glaciers, Cliffs, Coastal towns, Cities and towns in Norway, Film locations in Norway, Historical landmarks in Norway, Natural landmarks in Norway, Cinematic locations in Norway, Unique filming locations in Norway, Film-friendly locations in Norway, LoopFilm AS, LoopFilm Productions AS, Film production services in Norway, Video production in Norway, Production support in Norway"
        />
        <link rel="canonical" href="https://loopfilm.no/locations" />
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
