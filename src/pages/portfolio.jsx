import Head from 'next/head'
import Link from 'next/link'

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio - LoopFilm</title>
      </Head>
      <main>
        <div className="flex items-center justify-center w-full h-screen">
          <div className="text-center">
            <p className="my-6 text-lg font-bold text-gray-900">Portfolio</p>
            <Link href="/" className="text-gray-500">
              Back to homepage
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
