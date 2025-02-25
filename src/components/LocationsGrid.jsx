import Image from 'next/image'
import { Container } from './Container'

const locations = [
  {
    title: 'Northern Lights',
    alt: 'Northern Lights of Norway',
    description:
      'The Aurora Borealis, or Northern Lights, can be seen in Norway between September and April.',
    source: '/media/northern_lights_zkcaln.webp',
    bgColour: 'bg-fuchsia-400/5',
  },
  {
    title: 'Lofoten Islands',
    alt: 'View from the mountain Håen towards Måstadvika and the vacated hamlet of Måstad on Værøy in Lofoten, Nordland. Northern Norway. Island in the sea. Coast and mountains. Coastal landscape in Northern Norway.',
    description:
      'The dramatic landscapes and extraordinary views of the Lofoten Islands make for an incredibly picturesque backdrop.',
    source: '/media/lofoten_qplihb.webp',
    bgColour: 'bg-teal-200/10',
  },
  {
    title: 'Forests and Woodlands',
    alt: 'Norwegian forests and woodlands',
    description:
      'Norway enjoys some of the oldest and most beautiful forests in Europe, with many accessible for filming.',
    source: '/media/forest_zatrol.webp',
    bgColour: 'bg-green-500/5',
  },
  {
    title: 'Snowy Mountains',
    alt: 'Filming in Norway’s charming towns',
    description:
      'Do you need snow for your film production? Look no further. In Norway’s mountains, you can find snow all year round.',
    source: '/media/snow_xhdehm.webp',
    bgColour: 'bg-pink-300/10',
  },
  {
    title: 'Fjords',
    alt: 'Fjords of Norway',
    description:
      'Norway is famous for its deep, narrow fjords surrounded by steep mountains and lush forests, creating a spectacular backdrop.',
    source: '/media/oleksii-topolianskyi--oWyJoSqBRM-unsplash_xunz8i.jpg',
    bgColour: 'bg-blue-100/40',
  },
  {
    title: 'Tundra',
    alt: 'Filming Norway’s wildlife with LoopFilm',
    description:
      'Norway is home to a vast tundra landscape, with incredible views of this untouched landscape.',
    source: '/media/sebastien-goldberg-1r6rwX1FUdc-unsplash_fqicna.jpg',
    bgColour: 'bg-amber-400/5',
  },
  {
    title: 'Roads and Bridges',
    alt: 'Filming on Norway’s scenic roads',
    description:
      'Norway can offer sensational driving scenes with its curvy roads, rugged coastline, and modern infrastructure.',
    source: '/media/roads_xpbivu.webp',
    bgColour: 'bg-gray-200/20',
  },
  {
    title: 'Vistas',
    alt: 'Filming on cliffs for breathtaking views',
    description:
      'Spectacular views over sheer cliffs, perfect for panoramic landscapes and sensational vistas, await you in Norway.',
    source: '/media/cliff_fdcqrd.webp',
    bgColour: 'bg-sky-800/5',
  },
  {
    title: 'Beaches and Coastlines',
    alt: 'Beaches and Coastlines of Norway - Capturing Norway’s natural beauty with LoopFilm',
    description:
      'With beautiful white sands and turquoise waters, Norway has some of the most striking stretches of coastline and beaches.',
    source: '/media/beach_p7ohnf.webp',
    bgColour: 'bg-yellow-100/30',
  },
]

export function LocationsGrid() {
  return (
    <Container className="mt-16 mb-6 sm:mt-10 sm:mb-0 lg:mt-24">
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-y-12 sm:gap-x-8 xl:gap-x-8"
      >
        {locations.map((location) => (
          <li key={location.source} className="relative shadow-xl rounded-2xl">
            <div className="block w-full overflow-hidden bg-gray-100 rounded-b-none group aspect-w-10 aspect-h-7 rounded-2xl">
              <Image
                src={location.source}
                alt={location.alt}
                className="object-cover pointer-events-none"
                fill
              />
            </div>
            <div>
              <div className={location.bgColour}>
                <p className="block p-6 py-4 text-lg font-semibold text-gray-900 truncate pointer-events-none">
                  {location.title}
                </p>
              </div>
              <div className="p-6">
                <p className="block text-base text-gray-600 pointer-events-none">
                  {location.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  )
}
