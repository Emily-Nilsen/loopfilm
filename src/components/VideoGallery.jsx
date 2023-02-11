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
      <div
        id={videoUrl}
        className="overflow-hidden rounded-2xl bg-white shadow-xl"
      >
        <div className="flex-shrink-0">
          <VideoPlayer url={videoUrl} image={imgUrl} />
        </div>
        <div className="px-6 pt-5 pb-6">
          <div className="">
            <p className="pointer-events-none mt-2 block truncate text-lg font-semibold text-gray-900">
              {title}
            </p>

            {director && (
              <p className="pointer-events-none mt-2 block text-base font-medium text-gray-500">
                <span className="pr-2 text-sm font-normal">Director</span>
                {director}
              </p>
            )}

            {productionCompany && (
              <p className="pointer-events-none block text-base font-medium text-gray-500">
                <span className="pr-2 text-sm font-normal">
                  Production Company
                </span>
                {productionCompany}
              </p>
            )}

            {producer && (
              <p className="pointer-events-none block text-base font-medium text-gray-500">
                <span className="pr-2 text-sm font-normal">Producer</span>
                {producer}
              </p>
            )}

            {client && (
              <p className="pointer-events-none block text-base font-medium text-gray-500">
                <span className="pr-2 text-sm font-normal">Client</span>
                {client}
              </p>
            )}

            {agency && (
              <p className="pointer-events-none block text-base font-medium text-gray-500">
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
