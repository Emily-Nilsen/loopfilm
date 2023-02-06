export function BackgroundVideo() {
  return (
    <div>
      <video
        width="100%"
        autoPlay
        muted
        loop
        poster="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/bmw-large_rbr1c8.webp"
      >
        <source
          src="https://res.cloudinary.com/dt3k2apqd/video/upload/f_webm/q_auto/Loop%20Film/LoopFilm_01_n930vc.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  )
}
