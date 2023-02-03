import { useRouter } from 'next/router'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'

const links = [
  ['Home', '/'],
  ['Company', '/company'],
  ['Locations', '/locations'],
  ['Work', '/work'],
  ['Clients', '/clients'],
  ['Contact', '/contact'],
]

const socials = [
  {
    name: 'Vimeo',
    href: 'https://vimeo.com/user27493065',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 139.4 120.22" {...props}>
        <path
          fillRule="evenodd"
          d="m138.81,22.37c1.04-5.84,1.02-11.84-2.59-16.38-5.03-6.36-15.73-6.6-23.07-5.48-5.97.91-26.15,9.82-33.01,31.13,12.17-.92,18.54.88,17.37,14.27-.49,5.6-3.32,11.74-6.48,17.63-3.65,6.79-10.49,20.11-19.47,10.51-8.08-8.64-7.48-25.18-9.32-36.18-1.03-6.18-2.12-13.87-4.14-20.23-1.74-5.46-5.74-12.05-10.63-13.48-5.25-1.54-11.75.87-15.56,3.11C19.76,14.42,10.5,24.57,0,32.95v.78c2.08,1.99,2.64,5.25,5.71,5.7,7.23,1.06,14.12-6.74,18.93,1.38,2.92,4.96,3.84,10.4,5.71,15.75,2.5,7.12,4.43,14.88,6.48,23.07,3.46,13.87,7.72,34.6,19.71,39.68,6.12,2.6,15.31-.88,19.97-3.64,12.61-7.46,22.44-18.28,30.85-29.29,19.23-26.05,29.84-55.57,31.45-64h0Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/loopfilm/',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 108.23 108.23" {...props}>
        <path
          fillRule="evenodd"
          d="m54.11,9.75c14.45,0,16.16.05,21.87.32,5.28.24,8.14,1.12,10.05,1.86,2.53.98,4.33,2.15,6.22,4.05s3.07,3.7,4.05,6.22c.74,1.91,1.62,4.77,1.86,10.05.26,5.71.32,7.42.32,21.87s-.05,16.16-.32,21.87c-.24,5.28-1.12,8.14-1.86,10.05-.98,2.53-2.15,4.33-4.05,6.22-1.89,1.89-3.7,3.07-6.22,4.05-1.91.74-4.77,1.62-10.05,1.86-5.71.26-7.42.32-21.87.32s-16.16-.05-21.87-.32c-5.28-.24-8.14-1.12-10.05-1.86-2.53-.98-4.33-2.15-6.22-4.05-1.89-1.89-3.07-3.7-4.05-6.22-.74-1.91-1.62-4.77-1.86-10.05-.26-5.71-.32-7.42-.32-21.87s.05-16.16.32-21.87c.24-5.28,1.12-8.14,1.86-10.05.98-2.53,2.15-4.33,4.05-6.22,1.89-1.89,3.7-3.07,6.22-4.05,1.91-.74,4.77-1.62,10.05-1.86,5.71-.26,7.42-.32,21.87-.32m0-9.75c-14.7,0-16.54.06-22.31.33-5.76.26-9.69,1.18-13.14,2.52-3.56,1.38-6.58,3.23-9.58,6.24-3.01,3.01-4.86,6.03-6.24,9.58-1.34,3.44-2.25,7.38-2.52,13.14-.26,5.77-.33,7.61-.33,22.31s.06,16.54.33,22.31c.26,5.76,1.18,9.69,2.52,13.14,1.38,3.56,3.23,6.58,6.24,9.58,3.01,3.01,6.03,4.86,9.58,6.24,3.44,1.34,7.38,2.25,13.14,2.52,5.77.26,7.61.33,22.31.33s16.54-.06,22.31-.33c5.76-.26,9.69-1.18,13.14-2.52,3.56-1.38,6.58-3.23,9.58-6.24,3.01-3.01,4.86-6.03,6.24-9.58,1.34-3.44,2.25-7.38,2.52-13.14.26-5.77.33-7.61.33-22.31s-.06-16.54-.33-22.31c-.26-5.76-1.18-9.69-2.52-13.14-1.38-3.56-3.23-6.58-6.24-9.58-3.01-3.01-6.03-4.86-9.58-6.24-3.44-1.34-7.38-2.25-13.14-2.52-5.77-.26-7.61-.33-22.31-.33Zm0,26.33c-15.35,0-27.79,12.44-27.79,27.79s12.44,27.79,27.79,27.79,27.79-12.44,27.79-27.79-12.44-27.79-27.79-27.79Zm0,45.83c-9.96,0-18.04-8.08-18.04-18.04s8.08-18.04,18.04-18.04,18.04,8.08,18.04,18.04-8.08,18.04-18.04,18.04Zm35.38-46.92c0,3.59-2.91,6.49-6.49,6.49s-6.49-2.91-6.49-6.49,2.91-6.49,6.49-6.49,6.49,2.91,6.49,6.49Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/Loopfilm.no',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 121.45 120.72" {...props}>
        <g id="Layer_1-3" data-name="Layer_1">
          <path
            className="cls-2"
            d="m121.45,60.73c0,30.31-22.2,55.43-51.24,59.99v-42.44h14.15l2.69-17.55h-16.84v-11.39c0-4.8,2.35-9.49,9.89-9.49h7.66v-14.94s-6.95-1.19-13.59-1.19c-4.33,0-8.19.82-11.46,2.41-.65.32-1.28.67-1.88,1.05-1.21.76-2.32,1.65-3.32,2.65-4.01,4.01-6.27,9.91-6.27,17.52v13.38h-15.42v17.55h15.42v42.44C22.2,116.16,0,91.03,0,60.73,0,27.2,27.2,0,60.72,0s60.73,27.2,60.73,60.73Z"
          />
          <path
            className="cls-1"
            d="m57.51,29.83c.99-1,2.1-1.89,3.32-2.65-1.21.76-2.32,1.65-3.32,2.65Z"
          />
        </g>
      </svg>
    ),
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function ClientsFooter() {
  const router = useRouter()
  let [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="relative overflow-hidden bg-gray-900 isolate">
      <footer className="relative bg-t sm:pt-16">
        <Container>
          <div className="flex flex-col items-start justify-between pt-16 pb-6 gap-y-2 lg:flex-row lg:items-center lg:py-6">
            <div className="w-full sm:pt-12">
              <div className="flex items-center text-white sm:justify-between">
                <div className="flex items-start justify-between w-full">
                  <div className="w-full">
                    <p className="text-lg font-semibold">
                      <span
                        className={classNames(
                          router.pathname === '/'
                            ? ' text-sky-pink'
                            : router.pathname === '/company'
                            ? ' text-fuchsia-600'
                            : router.pathname === '/contact'
                            ? ' text-sky-pink'
                            : router.pathname === '/locations'
                            ? ' text-sky-600'
                            : router.pathname === '/work'
                            ? ' text-red-600'
                            : router.pathname === '/clients'
                            ? ' text-fuchsia-500'
                            : ''
                        )}
                      >
                        Loop
                      </span>
                      Film
                    </p>
                    <p className="mt-1">
                      Capturing the natural beauty of Norway
                    </p>
                  </div>
                  {/* Social icons on large screen */}
                  <div className="hidden sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                    {socials.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classNames(
                          router.pathname === '/'
                            ? ' hover:text-sky-pink'
                            : router.pathname === '/company'
                            ? ' hover:text-fuchsia-600'
                            : router.pathname === '/clients'
                            ? ' hover:text-fuchsia-500'
                            : router.pathname === '/contact'
                            ? ' hover:text-sky-pink'
                            : router.pathname === '/locations'
                            ? ' hover:text-sky-500'
                            : router.pathname === '/work'
                            ? ' hover:text-red-600'
                            : '',
                          'text-gray-400 transition duration-300 ease-in-out'
                        )}
                      >
                        <span className="sr-only">{item.name}</span>
                        <item.icon
                          className="w-4 h-4 sm:h-5 sm:w-5"
                          aria-hidden="true"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <nav className="flex-wrap hidden w-full gap-8 sm:mt-12 sm:flex">
                {/* Links */}
                {links.map(([label, href], index) => (
                  <Link
                    key={label}
                    href={href}
                    className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-base text-gray-300 transition-colors delay-150 hover:text-white hover:delay-[0ms]"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.span
                          className="absolute inset-0 rounded-lg bg-white/10"
                          layoutId="hoverBackground"
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: 1,
                            transition: { duration: 0.15 },
                          }}
                          exit={{
                            opacity: 0,
                            transition: { duration: 0.15, delay: 0.2 },
                          }}
                        />
                      )}
                    </AnimatePresence>
                    <span className="relative z-10">{label}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <div className="flex flex-col gap-6 pb-24 mt-6 sm:pb-12">
            <div className="flex space-x-5 sm:hidden sm:space-x-6 md:order-2">
              {socials.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classNames(
                    router.pathname === '/'
                      ? ' hover:text-sky-pink'
                      : router.pathname === '/company'
                      ? ' hover:text-fuchsia-600'
                      : router.pathname === '/clients'
                      ? ' hover:text-fuchsia-500'
                      : router.pathname === '/locations'
                      ? ' hover:text-sky-500'
                      : router.pathname === '/contact'
                      ? ' hover:text-green-300'
                      : router.pathname === '/work'
                      ? ' hover:text-red-600'
                      : '',
                    'text-gray-400 transition duration-300 ease-in-out'
                  )}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon
                    className="w-4 h-4 sm:h-5 sm:w-5"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
            <div className="flex items-center sm:pt-8 sm:pb-12 md:mt-0 md:pt-6">
              <p className="text-gray-300 ">
                &copy; LoopFilm Productions AS, {new Date().getFullYear()}. All
                rights reserved.
              </p>
            </div>
          </div>
        </Container>
      </footer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient
            id="8d958450-c69f-4251-94bc-4e091a323369"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(512 512) rotate(90) scale(512)"
          >
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}
