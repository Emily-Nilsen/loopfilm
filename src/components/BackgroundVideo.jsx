export function BackgroundVideo() {
  return (
    <div>
      <video
        width="100%"
        controls
        autoPlay
        muted
        playsInline
        poster="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/LoopFilm_Desktop_cltinr.webp"
      >
        <source
          src="https://res.cloudinary.com/dt3k2apqd/video/upload/v1679221458/Loop%20Film/LoopFilm_Desktop_jjukya.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  )
}
