import { FilmCamera } from './FilmCamera'

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
      />
    </svg>
  )
}

function SkypeIcon(props) {
  return (
    <svg viewBox="0 0 448 512" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z"
      />
    </svg>
  )
}

function EmailIcon(props) {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
      />
    </svg>
  )
}

export function OurOffices() {
  return (
    <section className="relative">
      {/* Offices */}
      <div className="relative w-full bg-white">
        <div className="px-6 py-16 mx-auto max-w-7xl sm:py-24 lg:py-32 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Our offices
          </h2>
          <p className="max-w-3xl mt-6 text-lg text-gray-900/80">
            We have offices in Oslo and Aalesund, providing easy access to the
            best locations throughout Norway.
          </p>
          <div className="grid grid-cols-1 gap-10 mt-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Main office</h3>
              <p className="mt-2 text-base text-gray-900/80">
                <span className="block">LoopFilm Productions AS</span>
                <span className="block">Frognerveien 35 B</span>
                <span className="block">0266 Oslo</span>
                <span className="block">Norway</span>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">West Coast</h3>
              <p className="mt-2 text-base text-gray-900/80">
                <span className="block">LoopFilm Productions AS</span>
                <span className="block">Rerstadvegen 55</span>
                <span className="block">6016 Aalesund</span>
                <span className="block">Norway</span>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Contact details
              </h3>
              <div className="mt-2 text-base text-gray-900">
                <dl className="space-y-2">
                  <dd className="flex items-center space-x-2">
                    <PhoneIcon className="w-4 h-4 fill-blue-600/50 " />
                    <span className="block">+47 9098 0286</span>
                  </dd>
                  <dd className="flex items-center space-x-2">
                    <SkypeIcon className="w-5 h-5 fill-blue-600/50 " />
                    <span className="block">jarletangen</span>
                  </dd>

                  <dd className="flex items-center space-x-2">
                    <EmailIcon className="w-4 h-4 fill-blue-600/50 " />
                    <span className="block">jarle@loopfilm.no</span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0">
        <FilmCamera className="h-auto w-screen stroke-gray-400 sm:w-[50vw]" />
      </div>
    </section>
  )
}
