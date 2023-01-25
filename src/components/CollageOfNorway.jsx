import Image from 'next/image'
import { Container } from './Container'
import { LocationsInfographicLeft } from './LocationsInfographicLeft'
import { LocationsInfographicRight } from './LocationsInfographicRight'

export function CollageOfNorway() {
  return (
    <section className="relative min-h-screen w-full">
      {/* Collage title */}
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-teal-600">
              Our locations
            </h2>
            <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Take control of your team.
            </p>
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
              Start building for free, then add a site plan to go live. Account
              plans unlock additional features.
            </p>
          </div>
        </div>
      </div>
      <Container className="relative">
        <div className="relative">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/map_of_norway_okdfsl.png"
            alt="The diverse landscapes of Norway"
            width={1365}
            height={1524}
            className="object-cover"
          />
        </div>
        <div className="absolute top-0 left-0">
          <LocationsInfographicLeft
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/infographic-forest_zq6ptr.webp"
            alt="Pine forests of Norway"
            title="Forests and Woodlands"
            description="Norway is home to some of the oldest and most beautiful forests in Europe, with many accessible for filming."
            bgColour="bg-green-800/10"
          />
        </div>
        <div className="absolute left-0 top-60">
          <LocationsInfographicLeft
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/federico-di-dio-photography-PAm1Zm3zYmc-unsplash_idjnak.jpg"
            alt="National Parks"
            title="National Parks"
            description="Norway has numerous national parks, providing some of the most stunning scenery in the world."
            bgColour="bg-gray-800/10"
          />
        </div>
        <div className="absolute right-0 bottom-80">
          <LocationsInfographicRight
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/oleksii-topolianskyi--oWyJoSqBRM-unsplash_xunz8i.jpg"
            alt="Fjords of Norway"
            title="Fjords"
            description="Norway is famous for its deep, narrow fjords surrounded by steep mountains and lush forests, creating a spectacular backdrop."
            bgColour="bg-blue-100/80"
          />
        </div>
        <div className="absolute right-0 bottom-20">
          <LocationsInfographicRight
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/sebastien-goldberg-1r6rwX1FUdc-unsplash_fqicna.jpg"
            alt="Tundra of Norway"
            title="Tundra"
            description="Norway is home to a vast tundra landscape, with incredible views of this untouched landscape."
            bgColour="bg-amber-800/10"
          />
        </div>
      </Container>
    </section>
  )
}
