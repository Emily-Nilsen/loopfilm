import { useState } from 'react'

import { VideoPlayer } from '@/components/VideoPlayer'
import { Container } from './Container'

export function VideoGallery({
  title,
  videoUrl,
  director,
  productionCompany,
  producer,
  client,
  agency,
  imgUrl,
}) {
  return (
    <li key={videoUrl} className="relative">
      <div className="overflow-hidden bg-white shadow-xl rounded-2xl">
        <VideoPlayer url={videoUrl} image={imgUrl} />

        <div className="px-6 pt-5 pb-6 ">
          <div>
            <p className="block mt-2 text-lg font-semibold text-gray-900 truncate pointer-events-none">
              {title}
            </p>

            {director && (
              <p className="block mt-2 text-base font-medium text-gray-500 pointer-events-none">
                <span className="pr-2 text-sm font-normal">Director</span>
                {director}
              </p>
            )}

            {productionCompany && (
              <p className="block text-base font-medium text-gray-500 pointer-events-none">
                <span className="pr-2 text-sm font-normal">
                  Production Company
                </span>
                {productionCompany}
              </p>
            )}

            {producer && (
              <p className="block text-base font-medium text-gray-500 pointer-events-none">
                <span className="pr-2 text-sm font-normal">Producer</span>
                {producer}
              </p>
            )}

            {client && (
              <p className="block text-base font-medium text-gray-500 pointer-events-none">
                <span className="pr-2 text-sm font-normal">Client</span>
                {client}
              </p>
            )}

            {agency && (
              <p className="block text-base font-medium text-gray-500 pointer-events-none">
                <span className="pr-2 text-sm font-normal">Agency</span>
                {agency}
              </p>
            )}
          </div>
        </div>
      </div>
    </li>
  )
}
