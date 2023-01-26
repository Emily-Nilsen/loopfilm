import Image from 'next/image'

import { PorscheLogo } from '@/components/Logos'
import { AppleLogo } from '@/components/Logos'
import { BmwLogo } from '@/components/Logos'
import { FerrariLogo } from '@/components/Logos'
import { AmazonLogo } from '@/components/Logos'
import { AlphaRomeoLogo } from '@/components/Logos'

export function LogoCloud() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16 lg:px-8">
        <p className="text-center text-lg font-semibold text-gray-600">
          Industry leaders who have chosen us
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <div className="col-span-1 flex justify-center bg-gray-50 px-8 py-8">
            <PorscheLogo className="h-12 max-h-12 fill-gray-400" />
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 px-8 py-8">
            <AppleLogo className="h-12 max-h-12 fill-gray-400" />
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 px-8 py-8">
            <FerrariLogo className="h-12 max-h-12 fill-gray-400" />
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 px-8 py-8">
            <AmazonLogo className="h-12 max-h-12 fill-gray-400" />
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 px-8 py-8">
            <BmwLogo className="h-12 max-h-12 fill-gray-400" />
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 px-8 py-8">
            <AlphaRomeoLogo className="h-12 max-h-12 fill-gray-400" />
          </div>
        </div>
      </div>
    </div>
  )
}
