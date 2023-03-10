export function BackgroundVideo() {
  return (
    <div>
      <video
        width="100%"
        autoPlay
        muted
        playsInline
        poster="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/bmw-large_rbr1c8.webp"
      >
        <source
          src="https://res.cloudinary.com/dt3k2apqd/video/upload/f_webm/Loop%20Film/LoopFilm_2_owtl3q.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  )
}
