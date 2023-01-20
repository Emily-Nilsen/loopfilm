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
      <div className="px-6 py-12 mx-auto max-w-7xl lg:py-16 lg:px-8">
        <p className="text-lg font-semibold text-center text-gray-600">
          Industry leaders who have chosen us
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
            <PorscheLogo className="max-h-12 fill-gray-400" />
          </div>
          <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
            <AppleLogo className="max-h-12 fill-gray-400" />
          </div>
          <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
            <FerrariLogo className="max-h-12 fill-gray-400" />
          </div>
          <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
            <AmazonLogo className="max-h-12 fill-gray-400" />
          </div>
          <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
            <BmwLogo className="max-h-12 fill-gray-400" />
          </div>
          <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
            <AlphaRomeoLogo className="max-h-12 fill-gray-400" />
          </div>
        </div>
      </div>
    </div>
  )
}
