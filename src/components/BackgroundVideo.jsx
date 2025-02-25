export function BackgroundVideo() {
  return (
    <div>
      <video
        width="100%"
        autoPlay
        muted
        loop
        playsInline
        poster="/media/LoopFilm_Desktop_cltinr.webp"
      >
        <source src="/media/LoopFilm_Desktop_jjukya.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
