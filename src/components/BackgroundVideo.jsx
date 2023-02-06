export function BackgroundVideo() {
  return (
    <div>
      <video width="100%" autoPlay muted loop>
        <source
          src="https://res.cloudinary.com/dt3k2apqd/video/upload/q_auto,f_auto/Loop%20Film/LoopFilm_01_n930vc.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
