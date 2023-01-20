import Image from 'next/image'

import { GlobalProductionLogo } from '@/components/Logos'
import { IACPLogo } from '@/components/Logos'
import { GreenTheBidLogo } from '@/components/Logos'
import { VirkeLogo } from '@/components/Logos'

export function MemberLogoCloud() {
  return (
    <div className="bg-white">
      <div className="px-6 py-12 mx-auto max-w-7xl lg:py-16 lg:px-8">
        <p className="text-lg font-semibold text-center text-gray-600">
          LoopFilm is proudly affiliated with the following film production
          associations
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8">
          <div className="flex justify-center col-span-1 px-8 py-8 bg-white">
            <GlobalProductionLogo className="max-h-12" />
          </div>
          <div className="flex justify-center col-span-1 px-8 py-8 bg-white">
            <IACPLogo className="max-h-12 fill-gray-400" />
          </div>
          <div className="flex justify-center col-span-1 px-8 py-8 bg-white">
            <GreenTheBidLogo className="max-h-12 fill-gray-400" />
          </div>
          <div className="flex justify-center col-span-1 px-8 py-8 bg-white">
            <VirkeLogo className="max-h-12 fill-gray-400" />
          </div>
        </div>
      </div>
    </div>
  )
}
