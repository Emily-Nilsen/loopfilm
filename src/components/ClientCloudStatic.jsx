import Image from 'next/image'

import { FerrariHorseLogo } from '@/components/Logos'
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
import { FerrariLogo } from '@/components/Logos'
import { AmazonLogo } from '@/components/Logos'
import { AlphaRomeoLogo } from '@/components/Logos'
import { UniversalLogo } from '@/components/Logos'
import { FordLogo } from '@/components/Logos'
import { CitibankLogo } from '@/components/Logos'
import { ThreeLogo } from '@/components/Logos'
import { ToyotaLogo } from '@/components/Logos'
import { MarriottLogo } from '@/components/Logos'
import { SubaruLogo } from '@/components/Logos'
import { GeneralElectricLogo } from '@/components/Logos'
import { SharpLogo } from '@/components/Logos'

import image01 from '@/images/client-01.webp'
import image02 from '@/images/client-02.webp'
import image03 from '@/images/client-03.webp'
import image04 from '@/images/client-04.webp'
import image05 from '@/images/client-05.webp'
import image06 from '@/images/client-06.webp'
import image07 from '@/images/client-07.webp'
import image08 from '@/images/client-08.webp'
import image09 from '@/images/client-09.webp'
import image10 from '@/images/client-10.webp'
import image11 from '@/images/client-11.webp'
import image12 from '@/images/client-12.webp'
import image13 from '@/images/client-13.webp'
import image14 from '@/images/client-14.webp'
import image15 from '@/images/client-15.webp'
import image16 from '@/images/client-16.webp'
import image17 from '@/images/client-17.webp'
import image18 from '@/images/client-18.webp'
import image19 from '@/images/client-19.webp'
import image20 from '@/images/client-20.webp'
import image21 from '@/images/client-21.webp'
import image22 from '@/images/client-22.webp'
import image23 from '@/images/client-23.webp'
import image24 from '@/images/client-24.webp'
import image25 from '@/images/client-25.webp'
import image26 from '@/images/client-26.webp'
import image27 from '@/images/client-27.webp'
import image28 from '@/images/client-28.webp'
import image29 from '@/images/client-29.webp'

const testimonials = [
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      image: image01,
      alt: 'General Motors',
      logo: <GeneralMotorsLogo className="h-12 max-h-12 fill-white" />,
      name: 'Leslie Alexander',
      handle: 'lesliealexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More testimonials...
]

const clients = [
  {
    id: 1,
    image: image01,
    alt: 'General Motors',
    logo: <GeneralMotorsLogo className="h-12 max-h-12 fill-white" />,
  },
  {
    id: 2,
    image: image02,
    alt: 'Napapijri',
    logo: <NapapijriLogo className="h-12 max-h-7 fill-white" />,
  },

  {
    id: 3,
    image: image03,
    alt: 'BMW',
    logo: <BmwLogo className="h-12 max-h-12 fill-white" />,
  },
  {
    id: 4,
    image: image04,
    alt: 'Biotherm',
    logo: <BiothermLogo className="h-10 max-h-10 fill-white" />,
  },
  {
    id: 5,
    image: image05,
    alt: 'Allstate',
    logo: <AllstateLogo className="h-8 max-h-8 fill-white" />,
  },
  {
    id: 6,
    image: image06,
    alt: 'Esselunga',
    logo: <EsselungaLogo className="h-5 max-h-5 fill-white" />,
  },
  {
    id: 7,
    image: image07,
    alt: 'Apple',
    logo: <AppleLogo className="h-10 max-h-10 fill-white" />,
  },
  {
    id: 8,
    image: image08,
    alt: 'Lotto',
    logo: <LottoLogo className="h-8 max-h-8 fill-white" />,
  },
  {
    id: 9,
    image: image09,
    alt: 'Peugeot',
    logo: <PeugeotLogo className="h-6 max-h-6 fill-white" />,
  },
  {
    id: 10,
    image: image10,
    alt: 'Eurosport',
    logo: <EurosportLogo className="h-5 max-h-5 fill-white" />,
  },
  {
    id: 11,
    image: image11,
    alt: 'Saga Holidays',
    logo: <SagaHolidaysLogo className="h-6 max-h-6 fill-white" />,
  },
  {
    id: 12,
    image: image12,
    alt: 'Amazon',
    logo: <AmazonLogo className="h-8 max-h-8 fill-white" />,
  },
  {
    id: 13,
    image: image13,
    alt: 'Infiniti',
    logo: <InfinitiLogo className="h-12 max-h-10 fill-white" />,
  },
  {
    id: 14,
    image: image14,
    alt: 'Peugeot Oculus',
    logo: <PeugeotLogo className="h-6 max-h-6 fill-white" />,
  },
  {
    id: 15,
    image: image15,
    alt: 'Universal - Ex_Machina',
    logo: <UniversalLogo className="h-12 max-h-12 fill-white" />,
  },
  {
    id: 16,
    image: image16,
    alt: 'Ferrari',
    logo: <FerrariLogo className="h-6 max-h-6 fill-white" />,
  },
  {
    id: 17,
    image: image17,
    alt: 'Porsche',
    logo: <PorscheLogo className="max-w-40 w-40 fill-white" />,
  },
  {
    id: 18,
    image: image18,
    alt: 'Ford Noruega',
    logo: <FordLogo className="h-10 max-h-10 fill-white" />,
  },
  {
    id: 19,
    image: image19,
    alt: 'Ford North Pole',
    logo: <FordLogo className="h-10 max-h-10 fill-white" />,
  },
  {
    id: 20,
    image: image20,
    alt: 'CitiBank',
    logo: <CitibankLogo className="h-7 max-h-7 fill-white" />,
  },
  {
    id: 21,
    image: image21,
    alt: 'Three Mobile',
    logo: <ThreeLogo className="h-12 max-h-12 fill-white" />,
  },
  {
    id: 22,
    image: image22,
    alt: 'Toyota',
    logo: <ToyotaLogo className="h-7 max-h-7 fill-white" />,
  },
  {
    id: 23,
    image: image23,
    alt: 'Marriott Vikings',
    logo: <MarriottLogo className="h-10 max-h-10 fill-white" />,
  },
  {
    id: 24,
    image: image24,
    alt: 'Marriott Cattle Drive',
    logo: <MarriottLogo className="h-10 max-h-10 fill-white" />,
  },
  {
    id: 25,
    image: image25,
    alt: 'Ford Mondeo - FlyingBird',
    logo: <FordLogo className="h-10 max-h-10 fill-white" />,
  },
  {
    id: 26,
    image: image26,
    alt: 'Subaru',
    logo: <SubaruLogo className="h-7 max-h-7 fill-white" />,
  },
  {
    id: 27,
    image: image27,
    alt: 'General Electric',
    logo: <GeneralElectricLogo className="h-5 max-h-5 fill-white" />,
  },
  {
    id: 28,
    image: image28,
    alt: 'Sharp',
    logo: <SharpLogo className="h-5 max-h-5 fill-white" />,
  },
  {
    id: 29,
    image: image29,
    alt: 'Marriott - Yukon',
    logo: <MarriottLogo className="h-10 max-h-10 fill-white" />,
  },
]

export function ClientCloudStatic({ id, image, alt, logo, link }) {
  return (
    <section id="reviews" className="isolate bg-gray-900 py-24 sm:py-32">
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
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto my-12 max-w-xl text-center sm:my-20">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            <span className="text-fuchsia-200">Loop</span>Film{' '}
          </h1>
          <h1 className="pt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            The professional choice for filming in Norway
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Our clients trust us to deliver high-quality results every time.
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {clients.map((client) => (
              <div
                key={client.id}
                className="pt-8 sm:inline-block sm:w-full sm:px-4 "
              >
                <figure className="relative h-52 animate-fade-in overflow-hidden rounded-2xl bg-gray-800 p-8 text-sm leading-6 opacity-0 shadow-md shadow-gray-900/5">
                  <Image
                    src={client.image}
                    alt={client.alt}
                    className="overflow-hidden rounded-2xl object-cover object-center"
                    fill
                    unoptimized={true}
                  />
                  <div className="absolute bottom-0 left-0 z-20 flex h-20 w-full items-end justify-start self-end bg-gradient-to-t from-gray-900 p-4">
                    {client.logo}
                  </div>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
