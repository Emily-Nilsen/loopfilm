export function BackgroundVideo() {
  return (
    <>
      <div className="hidden sm:block">
        <video
          width="100%"
          autoPlay
          muted
          playsInline
          // poster="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/bmw-large_rbr1c8.webp"
        >
          <source
            src="https://res.cloudinary.com/dt3k2apqd/video/upload/f_webm/Loop%20Film/LoopFilm_ix0zjg.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="sm:hidden">
        <video
          width="100%"
          autoPlay
          muted
          playsInline
          controls
          // poster="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Loop%20Film/bmw-large_rbr1c8.webp"
        >
          <source
            src="https://res.cloudinary.com/dt3k2apqd/video/upload/f_webm/Loop%20Film/LoopFilm_ix0zjg.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </>
  )
}
