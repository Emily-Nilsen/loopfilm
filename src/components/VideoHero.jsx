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

export function VideoHero({ url }) {
  const playerRef = useRef()

  return (
    <div className="relative pt-[56.25%]">
      <ReactPlayer
        ref={playerRef}
        // id="MyId"
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        width="100%"
        height="100%"
        autoplay="true"
        loop="true"
        muted="true"
        controls="false"
        playsinline="true"
        responsive="true"
        url={`https://vimeo.com/${url}`}
      />
    </div>
  )
}
