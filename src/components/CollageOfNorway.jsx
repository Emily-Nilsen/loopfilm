import Image from 'next/image'
import { Container } from './Container'
import { LocationsInfographicLeft } from './LocationsInfographicLeft'
import { LocationsInfographicRight } from './LocationsInfographicRight'

export function CollageOfNorway() {
  return (
    <section className="relative min-h-screen w-full grid-cols-3">
      {/* Collage title */}
      <div className="relative bg-white ">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Discover why Norway has everything you need for your next film
              production
            </p>
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
              From fjords to glaciers, forests to beaches, and snow-capped
              mountains to lakes, Norway offers the perfect filming locations.
            </p>
          </div>
        </div>
      </div>
      <Container className="relative grid grid-cols-3">
        <div className="relative col-span-1 col-start-2">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/collage-transparent_eovpsp.webp"
            alt="The diverse landscapes of Norway"
            width={1365}
            height={1524}
            className="object-cover"
          />
        </div>
        <div className="col-span-3">
          <div className="">
            <LocationsInfographicLeft
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/lofoten_qplihb.webp"
              alt="Lofoten Islands of Norway"
              title="Lofoten Islands"
              description="The dramatic landscapes and extraordinary views of the Lofoten Islands make for an incredibly picturesque backdrop."
              bgColour="bg-teal-600/10"
            />
          </div>
          <div className="">
            <LocationsInfographicLeft
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/infographic-forest_zq6ptr.webp"
              alt="Norwegian forests and woodlands"
              title="Forests and Woodlands"
              description="Norway is home to some of the oldest and most beautiful forests in Europe, with many accessible for filming."
              bgColour="bg-green-800/10"
            />
          </div>
          <div className="">
            <LocationsInfographicLeft
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/oleksii-topolianskyi--oWyJoSqBRM-unsplash_xunz8i.jpg"
              alt="Fjords of Norway"
              title="Fjords"
              description="Norway is famous for its deep, narrow fjords surrounded by steep mountains and lush forests, creating a spectacular backdrop."
              bgColour="bg-blue-100/80"
            />
          </div>
          <div className="">
            <LocationsInfographicLeft
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/cliff_fdcqrd.webp"
              alt="Vistas of Norway"
              title="Vistas"
              description="Spectacular views over sheer cliffs, perfect for panoramic landscapes and sensational vistas, await in Norway."
              bgColour="bg-sky-800/10"
            />
          </div>
          <div className="">
            <LocationsInfographicRight
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/northern_lights_zkcaln.webp"
              alt="Northern Lights of Norway"
              title="Northern Lights"
              description="The Aurora Borealis, or Northern Lights, can be seen in Norway between September and April."
              bgColour="bg-fuchsia-600/10"
            />
          </div>
          <div className="">
            <LocationsInfographicRight
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/sebastien-goldberg-1r6rwX1FUdc-unsplash_fqicna.jpg"
              alt="Tundra of Norway"
              title="Tundra"
              description="Norway is home to a vast tundra landscape, with incredible views of this untouched landscape."
              bgColour="bg-amber-800/10"
            />
          </div>
          <div className="">
            <LocationsInfographicRight
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/bridge_utgscu.webp"
              alt="Roads and Bridges of Norway"
              title="Roads and Bridges"
              description="Norway can offer sensational driving scenes with its curvy roads, rugged coastline, and modern infrastructure."
              bgColour="bg-gray-200/50"
            />
          </div>
          <div className="">
            <LocationsInfographicRight
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/beach_p7ohnf.webp"
              alt="Beaches and Coastlines of Norway"
              title="Beaches and Coastlines"
              description="Norway has some of the most striking stretches of coastline and beaches, with beautiful white sands and turquoise waters."
              bgColour="bg-teal-200/20"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
