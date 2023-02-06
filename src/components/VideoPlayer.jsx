import { useRef, useState } from 'react'
import { Play } from 'phosphor-react'
import ReactPlayer from 'react-player/lazy'

function PlayIcon(props) {
  return (
    <svg {...props} viewBox="0 0 384 512">
      <path d="M384 256L0 32V480L384 256z" />
    </svg>
  )
}

export function VideoPlayer({ url, image }) {
  const playerRef = useRef()

  return (
    <div className="relative pt-[56.25%]">
      <ReactPlayer
        ref={playerRef}
        // id="MyId"
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        width="100%"
        height="100%"
        controls
        playing
        // playsinline="true"
        responsive="true"
        light={image}
        playIcon={
          <div className="flex items-center justify-center w-16 h-16 transition duration-300 ease-in-out rounded-full group bg-white/50 hover:bg-white/80">
            <PlayIcon className="w-auto h-12 p-2 pl-3 fill-white group-hover:fill-gray-500" />
          </div>
        }
        url={url}
      />
    </div>
  )
}
