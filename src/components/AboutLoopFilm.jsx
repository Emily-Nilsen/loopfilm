import Link from 'next/link'
import { GPNLogo } from '@/components/Logos'

export function AboutLoopFilm() {
  return (
    <div className="bg-t overflow-hidden px-6 py-16 lg:px-8 xl:py-36">
      <div className="mx-auto max-w-max lg:max-w-7xl">
        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
          <div className="max-w-prose text-base lg:max-w-none">
            <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl">
              Loop<span className="text-GPN-dark-blue">Film</span>
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="md:bg-t relative md:p-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-6">
              <div className="prose prose-lg prose-indigo text-white lg:max-w-none">
                <p>
                  If you’re looking for a professional Norwegian film production
                  company specialising in service production, look no further
                  than LoopFilm Productions AS. Founded in 1994, we have
                  established ourselves as the leading production company in
                  Norway, known for our ability to provide exceptional services
                  to filmmakers worldwide.
                </p>
                <p>
                  Our location offers a wide range of spectacular landscapes,
                  from white sandy beaches to glaciers, and we have the
                  infrastructure to make filming in Norway a breeze. Whether
                  you’re looking to shoot under extreme conditions or capture
                  the beauty of our curvy, breathtaking roads and rugged
                  coastline, we can help.
                </p>
              </div>
              <div className="prose prose-lg prose-indigo mt-6 text-white lg:mt-0">
                <p>
                  Norway is the perfect playground for any director with our
                  vast range of landscapes, including mountains, fjords,
                  glaciers, lakes, forests, and manufactured structures like
                  bridges and tunnels. Plus, we have snow all year round in the
                  mountains, giving you endless possibilities for your film.
                </p>
                <p>
                  We have a reputation for working with some of the best
                  filmmakers in the world, and we’re proud to have a philosophy
                  that every job is manageable and every client is our most
                  important client. We’re also proud members of the Global
                  Production Network, ensuring we are always up to date with the
                  latest industry trends and standards.
                </p>
                <p>
                  Don’t hesitate to contact us for references or to discuss your
                  project. We’re ready to help you create a masterpiece in
                  Norway.
                </p>
                <GPNLogo className="mt-12 h-auto w-32" />
              </div>
            </div>
            <div className="mt-8 inline-flex rounded-md shadow">
              <Link
                href="/contact"
                className="flex items-center justify-center rounded-md border border-transparent bg-sky-orange px-5 py-3 text-base font-medium text-white hover:bg-sky-pink"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
