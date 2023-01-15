export function OurOffices() {
  return (
    <div className="w-full bg-t">
      <div className="px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Our offices
        </h2>
        <p className="max-w-3xl mt-6 text-lg text-white/80">
          With locations in both Oslo and Aalesund, we’re always ready to bring
          your film to life.
        </p>
        <div className="grid grid-cols-1 gap-10 mt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-medium text-white">Main office</h3>
            <p className="mt-2 text-base text-white/80">
              <span className="block">LoopFilm Productions AS</span>
              <span className="block">Frognerveien 35 B</span>
              <span className="block">0266 Oslo</span>
              <span className="block">Norway</span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">West Coast</h3>
            <p className="mt-2 text-base text-white/80">
              <span className="block">LoopFilm Productions AS</span>
              <span className="block">Rerstadvegen 55</span>
              <span className="block">6016 Aalesund</span>
              <span className="block">Norway</span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">Contact info</h3>
            <p className="mt-2 text-base text-white/80">
              <span className="block">+47 9098 0286</span>
              <span className="block">Skype: jarletangen</span>
              <span className="block">jarle@loopfilm.no</span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">socials</h3>
            <p className="mt-2 text-base text-white/80">
              <span className="block">114 Cobble Lane</span>
              <span className="block">London N1 2EF</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
