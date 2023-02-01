import Image from 'next/image'
import { Container } from './Container'

const locations = [
  {
    title: 'Northern Lights',
    alt: 'Northern Lights of Norway',
    description:
      'The Aurora Borealis, or Northern Lights, can be seen in Norway between September and April.',
    source:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/northern_lights_zkcaln.webp',
    bgColour: 'bg-fuchsia-400/5',
  },
  {
    title: 'Lofoten Islands',
    alt: 'View from the mountain Håen towards Måstadvika and the vacated hamlet of Måstad on Værøy in Lofoten, Nordland. Northern Norway. Island in the sea. Coast and mountains. Coastal landscape in Northern Norway.',
    description:
      'The dramatic landscapes and extraordinary views of the Lofoten Islands make for an incredibly picturesque backdrop.',
    source:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/lofoten_qplihb.webp',
    bgColour: 'bg-teal-200/10',
  },
  {
    title: 'Forests and Woodlands',
    alt: 'Norwegian forests and woodlands',
    description:
      'Norway enjoys some of the oldest and most beautiful forests in Europe, with many accessible for filming.',
    source:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/forest_zatrol.webp',
    bgColour: 'bg-green-500/5',
  },
  {
    title: 'Snowy Mountains',
    alt: 'Mountains of Norway',
    description:
      'Do you need snow for your film production? Look no further. In Norway’s mountains, you can find snow all year round.',
    source:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1675094342/Loop%20Film/snow_xhdehm.webp',
    bgColour: 'bg-pink-300/10',
  },
  {
    title: 'Fjords',
    alt: 'Fjords of Norway',
    description:
      'Norway is famous for its deep, narrow fjords surrounded by steep mountains and lush forests, creating a spectacular backdrop.',
    source:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/oleksii-topolianskyi--oWyJoSqBRM-unsplash_xunz8i.jpg',
    bgColour: 'bg-blue-100/40',
  },
  {
    title: 'Tundra',
    alt: 'Tundra of Norway',
    description:
      'Norway is home to a vast tundra landscape, with incredible views of this untouched landscape.',
    source:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/sebastien-goldberg-1r6rwX1FUdc-unsplash_fqicna.jpg',
    bgColour: 'bg-amber-400/5',
  },
  {
    title: 'Roads and Bridges',
    alt: 'Roads and Bridges of Norway',
    description:
      'Norway can offer sensational driving scenes with its curvy roads, rugged coastline, and modern infrastructure.',
    source:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/roads_xpbivu.webp',
    bgColour: 'bg-gray-200/20',
  },
  {
    title: 'Vistas',
    alt: 'Vistas of Norway',
    description:
      'Spectacular views over sheer cliffs, perfect for panoramic landscapes and sensational vistas, await you in Norway.',
    source:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/cliff_fdcqrd.webp',
    bgColour: 'bg-sky-800/5',
  },
  {
    title: 'Beaches and Coastlines',
    alt: 'Beaches and Coastlines of Norway',
    description:
      'With beautiful white sands and turquoise waters, Norway has some of the most striking stretches of coastline and beaches.',
    source:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/beach_p7ohnf.webp',
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
          <li key={location.source} className="relative rounded-2xl shadow-xl">
            <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-2xl rounded-b-none bg-gray-100">
              <Image
                src={location.source}
                alt={location.alt}
                className="pointer-events-none object-cover"
                fill
              />
            </div>
            <div>
              <div className={location.bgColour}>
                <p className="pointer-events-none block truncate p-6 py-4 text-lg font-semibold text-gray-900">
                  {location.title}
                </p>
              </div>
              <div className="p-6">
                <p className="pointer-events-none block text-base text-gray-600">
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
