import { useRef } from 'react'
import { Video, CloudinaryContext, Transformation } from 'cloudinary-react'

export function CloudinaryVideoPlayer({ publicId }) {
  const videoRef = useRef()
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

  return (
    <CloudinaryContext cloud_name={cloudName}>
      <div className="">
        <Video
          playsinline
          muted
          loop
          autoPlay
          publicId={publicId}
          width="100%"
          innerRef={videoRef}
          fluid
          // poster="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/bmw-large_rbr1c8.webp"
        >
          {/* <Transformation quality="auto" videoCodec="auto" /> */}
        </Video>
      </div>
    </CloudinaryContext>
  )
}
