import { useState } from 'react'

import { VideoPlayer } from '@/components/VideoPlayer'
import { Container } from './Container'

import { GeneralMotorsLogo } from '@/components/Logos'
import { BiothermLogo } from '@/components/Logos'
import { EurosportLogo } from '@/components/Logos'
import { SagaHolidaysLogo } from '@/components/Logos'
import { AllstateLogo } from '@/components/Logos'
import { LottoLogo } from '@/components/Logos'
import { PeugeotLogo } from '@/components/Logos'
import { NapapijriLogo } from '@/components/Logos'
import { EsselungaLogo } from '@/components/Logos'
import { InfinitiLogo } from '@/components/Logos'
import { PorscheLogo } from '@/components/Logos'
import { AppleLogo } from '@/components/Logos'
import { BmwLogo } from '@/components/Logos'
import { FerrariHorseLogo } from '@/components/Logos'
import { AmazonLogo } from '@/components/Logos'
import { AlphaRomeoLogo } from '@/components/Logos'
import { UniversalLogo } from '@/components/Logos'

const videos = [
  {
    title: 'Will Ferrell, Super Bowl',
    director: 'Jake Szymanski',
    productionCompany: 'Gifted Youth',
    producer: 'Josh Morse',
    client: 'General Motors',
    agency: 'Commonwealth/McCann',
    url: '510229015?embedded=true&source=vimeo_logo&owner=27493065',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/bmw-large_rbr1c8.webp',
    logo: <GeneralMotorsLogo className="h-6 max-h-6 fill-gray-400" />,
  },
  {
    title: 'Allstate, The Island',
    director: 'Ivan Zacharias',
    productionCompany: 'Smuggler/Small Evidence',
    producer: 'Nick Landon/Kelly Appleton',
    client: 'Allstate Insurance',
    agency: 'Accenture, New York',
    url: '470482066',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/Allstate-large_gjdlvn.webp',
    logo: <AllstateLogo className="w-16 max-w-16 fill-gray-400" />,
  },
  {
    title: 'Biotherm, Life Plankton Elixir',
    director: 'Matt Baron',
    productionCompany: 'Bandits',
    producer: 'Vincent Bourdin & Helen Gardiner',
    client: 'Biotherm L’Oréal',
    agency: 'Prodigious',
    url: '374624719',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/biotherm-large_exjyfe.webp',
    logo: <BiothermLogo className="w-16 max-w-16 fill-gray-400" />,
  },
  {
    title: 'Napapijri',
    director: 'Services Généraux',
    productionCompany: 'Pavillon Noir',
    producer: 'Alice Jorry',
    client: 'Napapijri',
    agency: '',
    url: '758764930?embedded=true&source=vimeo_logo&owner=27493065',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/Napapijri-large_ez7sne.webp',
    logo: <NapapijriLogo className="w-16 max-w-16 fill-gray-400" />,
  },
  {
    title: 'BMW "The Difference”',
    director: 'Anders Jedenfors',
    productionCompany: 'Believe Media',
    producer: 'Mark O’Sullivan',
    client: 'BMW Global',
    agency: 'KBS',
    url: '235391854?embedded=true&source=vimeo_logo&owner=27493065',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/Bmw-large_mxsd4y.webp',
    logo: <BmwLogo className="h-6 max-h-6 fill-gray-400" />,
  },
  {
    title: 'Peugeot Senses',
    director: 'Bruno Aveillan',
    productionCompany: 'Quad Productions',
    producer: 'Claudia Traeger',
    client: 'BMW Global',
    agency: 'Peugeot',
    url: '184757250?embedded=true&source=vimeo_logo&owner=27493065',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/pegueot-large_wopox3.webp',
    logo: <PeugeotLogo className="h-6 max-h-6 fill-gray-400" />,
  },
  {
    title: 'Eurosport Beijing',
    director: 'Henry Hobson',
    productionCompany: 'MJZ, London',
    producer: 'Stephen Johnson',
    client: 'Eurosport',
    agency: 'R/GA',
    url: '671156696?embedded=true&source=vimeo_logo&owner=27493065',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1674724261/Loop%20Film/eurosport-large_xax0ao.webp',
    logo: <EurosportLogo className="w-16 max-w-16 fill-gray-400" />,
  },
  {
    title: 'Apple Sigrid',
    director: 'Francesco Carrozzini',
    productionCompany: 'Reset Media',
    producer: 'Megan Moore',
    client: 'Apple, USA',
    agency: 'Apple, USA',
    url: '228800194?embedded=true&source=vimeo_logo&owner=27493065',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/apple-large_yy5gds.webp',
    logo: <AppleLogo className="h-6 max-h-6 fill-gray-400" />,
  },
  {
    title: 'The Cabin',
    director: 'Jeroen Mol',
    productionCompany: 'RistrettoFilms',
    producer: 'Lies Bronselaer',
    client: 'Lotto, Belgium',
    agency: 'Mortierbrigade',
    url: '368751804?embedded=true&source=vimeo_logo&owner=27493065',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/lotto-large_urvvxz.webp',
    logo: <LottoLogo className="w-12 max-w-12 fill-gray-400" />,
  },
]

export function VideoGallery() {
  const [sortCriteria, setSortCriteria] = useState('title')

  const handleSortCriteriaChange = (event) => {
    setSortCriteria(event.target.value)
  }

  const sortedVideos = videos.sort((a, b) => {
    if (sortCriteria === 'title') {
      return a.title.localeCompare(b.title)
    } else if (sortCriteria === 'client') {
      return a.client.localeCompare(b.client)
    } else if (sortCriteria === 'productionCompany') {
      return a.productionCompany.localeCompare(b.productionCompany)
    }
  })

  return (
    <>
      <Container className="my-16 lg:my-24">
        {/* Title */}
        <div className="max-w-4xl px-6 pb-6 mx-auto lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Films made by LoopFilm AS
            </p>
            <p className="max-w-xl mx-auto mt-5 text-xl text-gray-500">
              We are a Norwegian production company and full service creative
              agency specialising in commercials, corporate videos and
              documentaries. See some of our work below.
            </p>
          </div>
        </div>
        {/* Sort by category */}
        <div className="my-6">
          <label
            htmlFor="sort"
            className="block text-sm font-medium text-gray-700"
          >
            Sort by
          </label>
          <select
            name="sort"
            value={sortCriteria}
            onChange={handleSortCriteriaChange}
            className="block py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md w-fit focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
            defaultValue="title"
          >
            <option value="title">Title</option>
            <option value="client">Client</option>
            <option value="productionCompany">Production Company</option>
          </select>
        </div>

        {/* Video Gallery */}
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
        >
          {videos.map((video) => (
            <li key={video.title} className="relative">
              <div className="overflow-hidden bg-white shadow-xl rounded-2xl">
                <VideoPlayer url={video.url} image={video.image} />

                <div className="px-6 pt-5 pb-6 ">
                  <div>
                    <p className="block mt-2 text-lg font-semibold text-gray-900 truncate pointer-events-none">
                      {video.title}
                    </p>
                    <p className="block mt-2 text-base font-medium text-gray-500 pointer-events-none">
                      <span className="pr-2 text-sm font-normal">Director</span>
                      {video.director}
                    </p>
                    <p className="block text-base font-medium text-gray-500 pointer-events-none">
                      <span className="pr-2 text-sm font-normal">
                        Production Company
                      </span>
                      {video.productionCompany}
                    </p>
                    <p className="block text-base font-medium text-gray-500 pointer-events-none">
                      <span className="pr-2 text-sm font-normal">Producer</span>
                      {video.producer}
                    </p>
                    {video.client && (
                      <p className="block text-base font-medium text-gray-500 pointer-events-none">
                        <span className="pr-2 text-sm font-normal">Client</span>
                        {video.client}
                      </p>
                    )}
                    {video.agency && (
                      <p className="block text-base font-medium text-gray-500 pointer-events-none">
                        <span className="pr-2 text-sm font-normal">Agency</span>
                        {video.agency}
                      </p>
                    )}
                  </div>
                  <div className="grid w-full justify-items-end">
                    <div className=" w-fit">{video.logo}</div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}
