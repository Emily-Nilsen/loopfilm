import { SnowflakeIcon } from './Logos'
import { TreesIcon } from './Logos'
import { CameraMovieIcon } from './Logos'
import { ShieldCheckIcon } from './Logos'

const features = [
  {
    name: 'Diverse landscapes',
    description:
      'Norway is the perfect playground for any director with our vast range of landscapes, including mountains, fjords, glaciers, lakes, forests, and manufactured structures like bridges and tunnels.',
    icon: TreesIcon,
  },
  {
    name: 'Let it snow',
    description:
      'We have snow all year round in the mountains, giving you endless possibilities for your film.',
    icon: SnowflakeIcon,
  },
  {
    name: 'Expert filmmakers, reliable service',
    description:
      'We have a reputation for working with some of the best filmmakers in the world, and we’re proud to have a philosophy that every job is manageable, and every client is our most important client.',
    icon: CameraMovieIcon,
  },
  {
    name: 'Leading industry standards',
    description:
      'We’re also proud members of the Global Production Network, ensuring we are always up to date with the latest industry trends and standards.',
    icon: ShieldCheckIcon,
  },
]

export function LoopFilmDetails() {
  return (
    <div className="pb-24 -mt-10 bg-t sm:pb-32 md:mt-0 lg:pb-40">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-sky-600">
            Scandinavian vistas
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Extreme filmmaking
          </p>
          <p className="max-w-2xl mx-auto mt-6 text-lg leading-8 text-gray-600">
            Whether you’re looking to shoot under extreme conditions or capture
            the beauty of our curvy, breathtaking roads and rugged coastline, we
            can help.
          </p>
        </div>

        <div className="max-w-lg mt-20 sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
              >
                <div className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-sky-600 sm:shrink-0">
                  <feature.icon
                    className="w-6 h-6 fill-white"
                    aria-hidden="true"
                  />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">
                    {feature.name}
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
