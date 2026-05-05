import Head from 'next/head'
import { Header } from '@/components/Header'
import { VideoHero } from '@/components/VideoHero'
import { VideoGallery } from '@/components/VideoGallery'
import { Container } from '@/components/Container'
import { WorkFooter } from '@/components/WorkFooter'

import films from '@/data/films.json'

export default function Work() {
  return (
    <>
      <Head>
        <title>Past work</title>
        <meta
          name="description"
          content="Bringing your vision to life with LoopFilm - Your reliable filming partner in Norway"
        />
        <link rel="canonical" href="https://loopfilm.no/work" />
        <meta
          name="keywords"
          content="General Electric - Fishing, Santa, Saga Holidays, CitiBank - Father and son, Ford, Noruega, The Cabin, Sharp, The Faint of Heart, Toyota, Subaru, Courtyard Marriott - Cattle Drive, The Dream Road, Ferrari, Apple Sigrid, Peugeot Oculus, Ford Mondeo - FlyingBird, Courtyard Marriott - Yukon, Ex_Machina - Official Trailer, Dream Big, Biotherm, Life Plankton Elixir, Will Ferrell, Super Bowl, Three Mobile, Peugeot Senses, BMW “The Difference”, Porsche Panamera, Courtyard Marriott - Vikings, Napapijri, Allstate, The Island, Eurosport Beijing"
        />
      </Head>

      <Header />

      <VideoHero />
      <main>
        <Container className="mt-16 mb-6 lg:mb-12 lg:mt-24">
          <div className="max-w-4xl px-6 pb-6 mx-auto lg:px-8">
            <div className="text-center">
              <p className="my-1 mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:mb-12 sm:text-5xl lg:text-6xl">
                A selection of our work
              </p>
            </div>
          </div>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
          >
            {films.map((film) => (
              <div key={film.videoUrl} className="h-full">
                <VideoGallery
                  title={film.title}
                  videoUrl={film.videoUrl}
                  director={film.director}
                  productionCompany={film.productionCompany}
                  producer={film.producer}
                  client={film.client}
                  agency={film.agency}
                  imgUrl={film.imgUrl}
                />
              </div>
            ))}
          </ul>
        </Container>
      </main>
      <WorkFooter />
    </>
  )
}
