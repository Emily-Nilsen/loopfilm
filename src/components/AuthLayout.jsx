import Link from 'next/link'

export function AuthLayout({ title, subtitle, children }) {
  return (
    <main className="relative z-10 flex min-h-full pt-16 overflow-hidden sm:py-28">
      <div className="flex flex-col w-full max-w-2xl px-4 mx-auto sm:px-6">
        {/* <Link href="/" aria-label="Home">
          <Logo className="w-auto h-10 mx-auto" />
        </Link> */}
        <div className="relative mt-12 sm:mt-16">
          <h1 className="text-4xl font-medium tracking-tight text-center text-white sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-lg text-center text-white/90">{subtitle}</p>
          )}
        </div>
        <div className="flex-auto px-4 py-10 mt-10 -mx-4 shadow-2xl bg-white/70 shadow-gray-900/10 sm:mx-0 sm:flex-none sm:rounded-5xl sm:p-24">
          {children}
        </div>
      </div>
    </main>
  )
}
