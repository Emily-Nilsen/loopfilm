import { CloudinaryVideoPlayer } from './CloudinaryVideoPlayer'

export function VideoHero() {
  return (
    <div className="relative z-20 h-auto w-full bg-red-400 pt-[56.25%]">
      <div className="absolute inset-0">
        <CloudinaryVideoPlayer publicId="https://res.cloudinary.com/dt3k2apqd/video/upload/v1675528149/Loop%20Film/LoopFilm_01_uy1dlw.mp4" />
      </div>
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-900 sm:h-60 lg:h-80" />
    </div>
  )
}
