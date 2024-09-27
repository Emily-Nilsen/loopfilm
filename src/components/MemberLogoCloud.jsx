import Image from 'next/image'
import Link from 'next/link'

import { GPNLogoGrey } from '@/components/Logos'
import { IACPLogo } from '@/components/Logos'
import { GreenTheBidLogo } from '@/components/Logos'
import { VirkeLogo } from '@/components/Logos'

export function MemberLogoCloud() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16 lg:px-8">
        <p className="text-center text-lg font-semibold text-gray-600">
          LoopFilm is proudly affiliated with the following organisations
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8">
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://www.globalproductionnetwork.com/"
          >
            <div className="col-span-1 flex justify-center bg-white px-8 py-8">
              <GPNLogoGrey className="h-12 max-h-12 fill-gray-400 transition duration-300 ease-in-out hover:fill-sky-pink" />
            </div>
          </Link>
          <Link target="_blank" rel="noreferrer" href="https://www.aicp.com/">
            <div className="col-span-1 flex justify-center bg-white px-8 py-8">
              <IACPLogo className="h-12 max-h-12 fill-gray-400 transition duration-300 ease-in-out hover:fill-sky-pink" />
            </div>
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://www.greenthebid.earth/"
          >
            <div className="col-span-1 flex justify-center bg-white px-8 py-8">
              <GreenTheBidLogo className="h-12 max-h-12 fill-gray-400 transition duration-300 ease-in-out hover:fill-sky-pink" />
            </div>
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://www.virke.no/?gclid=Cj0KCQiA6rCgBhDVARIsAK1kGPI-Qb9tauzOPe-XcenTJVr8OS7uYZKoGyi6F3km45kjOwe-c4_rlMAaAqGxEALw_wcB"
          >
            <div className="col-span-1 flex justify-center bg-white px-8 py-8">
              <VirkeLogo className="h-12 max-h-12 fill-gray-400 transition duration-300 ease-in-out hover:fill-sky-pink" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
