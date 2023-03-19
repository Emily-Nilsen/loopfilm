import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { WorkHero } from '@/components/WorkHero'
import { VideoHero } from '@/components/VideoHero'
import { VideoGallery } from '@/components/VideoGallery'
import { Container } from '@/components/Container'
import { WorkCta } from '@/components/WorkCta'
import { WorkFooter } from '@/components/WorkFooter'

import { Client } from '@notionhq/client'

export default function Work({ films }) {
  return (
    <>
      <Head>
        <title>Past work</title>
        <meta
          name="description"
          content="Transform your vision into reality - with our film production services in Norway."
        />
        <link rel="canonical" href="https://loopfilm.no/work" />
        <meta
          name="keywords"
          content="General Electric - Fishing, Santa, Saga Holidays, CitiBank - Father and son, Ford, Noruega, The Cabin, Sharp, The Faint of Heart, Toyota, Subaru, Courtyard Marriott - Cattle Drive, The Dream Road, Ferrari, Apple Sigrid, Peugeot Oculus, Ford Mondeo - FlyingBird, Courtyard Marriott - Yukon, Ex_Machina - Official Trailer, Dream Big, Biotherm, Life Plankton Elixir, Will Ferrell, Super Bowl, Three Mobile, Peugeot Senses, BMW “The Difference”, Porsche Panamera, Courtyard Marriott - Vikings, Napapijri, Allstate, The Island, Eurosport Beijing"
        />
      </Head>
      <div className="isolate h-24 bg-gray-900 sm:h-28">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#f4773080-2a16-4ab4-9fd7-579fec69a4f7)"
              fillOpacity=".2"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="f4773080-2a16-4ab4-9fd7-579fec69a4f7"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#cb4b7c" />
                <stop offset={1} stopColor="#713180" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <Header />
      </div>

      <VideoHero />
      <main>
        <Container className="mt-16 mb-6 lg:mb-12 lg:mt-24">
          <div className="mx-auto max-w-4xl px-6 pb-6 lg:px-8">
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
              <div key={film.id}>
                <VideoGallery
                  title={
                    film.properties.Title.title[0]
                      ? film.properties.Title.title[0].plain_text
                      : 'New Release: LoopFilm'
                  }
                  videoUrl={film.properties.VideoUrl.url}
                  director={
                    film.properties.Director.rich_text[0]
                      ? film.properties.Director.rich_text[0].plain_text
                      : null
                  }
                  productionCompany={
                    film.properties.ProductionCompany.rich_text[0]
                      ? film.properties.ProductionCompany.rich_text[0]
                          .plain_text
                      : null
                  }
                  producer={
                    film.properties.Producer.rich_text[0]
                      ? film.properties.Producer.rich_text[0].plain_text
                      : null
                  }
                  client={
                    film.properties.Client.rich_text[0]
                      ? film.properties.Client.rich_text[0].plain_text
                      : null
                  }
                  agency={
                    film.properties.Agency.rich_text[0]
                      ? film.properties.Agency.rich_text[0].plain_text
                      : null
                  }
                  imgUrl={
                    film.properties.ImgUrl.files[0]
                      ? film.properties.ImgUrl.files[0].name
                      : 'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/new_release_loopfilm_zbk6jw.webp'
                  }
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

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY })

  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,

    sorts: [
      {
        property: 'Order',
        direction: 'descending',
      },
    ],
  })

  return {
    props: {
      films: response.results,
    },
    revalidate: 1,
  }
}
