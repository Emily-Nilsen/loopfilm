import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'

const container = {
  hidden: {
    scale: 1,
    x: 'calc(50vw - 342px)',
    y: '25vh',
  },
  visible: {
    scale: 0.25,
    x: 0,
    y: 0,
    transition: {
      delay: 0.5,
      type: 'spring',
      duration: 1,
      bounce: 0,
    },
  },
}

const containerMobile = {
  hidden: {
    scale: 1,
    x: 'calc(50vw - 85px)',
    y: '25vh',
  },
  visible: {
    scale: 0.4,
    x: 0,
    y: 0,
    transition: {
      delay: 0.5,
      type: 'spring',
      duration: 1,
      bounce: 0,
    },
  },
}

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink({ children, ...props }) {
  return (
    <Link
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Link>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Header() {
  const router = useRouter()

  return (
    <header className="absolute top-0 left-0 w-full">
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          {/* Logo */}
          {router.pathname === '/' && (
            <>
              <div className="hidden sm:block">
                <Link href="/" aria-label="Home">
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="flex items-center"
                  >
                    <Logomark className="-mt-32 -mr-80 h-48 w-auto stroke-sky-orange pt-1" />
                  </motion.div>
                </Link>
              </div>
              <div className="sm:hidden">
                <Link href="/" aria-label="Home">
                  <motion.div
                    variants={containerMobile}
                    initial="hidden"
                    animate="visible"
                    className="flex items-center"
                  >
                    <Logomark className="-mt-16 -mr-40 h-24 w-auto stroke-sky-orange" />
                  </motion.div>
                </Link>
              </div>
            </>
          )}

          <div>
            <Link href="/" aria-label="Home">
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  type: 'fade',
                }}
                className="flex items-center"
              >
                <Logo
                  className={classNames(
                    router.pathname === '/company'
                      ? ' stroke-fuchsia-200'
                      : router.pathname === '/contact'
                      ? ' stroke-white'
                      : router.pathname === '/locations'
                      ? ' stroke-teal-400'
                      : router.pathname === '/work'
                      ? ' stroke-white'
                      : router.pathname === '/clients'
                      ? ' stroke-white'
                      : '',
                    'h-8 w-auto sm:h-12'
                  )}
                />
              </motion.div>
            </Link>
          </div>

          {/* NavItems */}
          <div className="flex">
            <div className="relative z-10 flex items-center gap-16">
              {router.pathname === '/' ? (
                <div className="hidden sm:-mt-4 lg:flex lg:gap-10">
                  <NavLinks />
                </div>
              ) : (
                <div className="hidden lg:flex lg:gap-10">
                  <NavLinks />
                </div>
              )}
            </div>
            <div className="flex items-center gap-6">
              <Popover className="lg:hidden">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        router.pathname === '/'
                          ? 'stroke-sky-pink hover:bg-sky-pink/10 hover:stroke-sky-pink active:stroke-sky-pink'
                          : router.pathname === '/company'
                          ? ' stroke-fuchsia-300 hover:bg-fuchsia-500/10 hover:stroke-fuchsia-500 active:stroke-fuchsia-500'
                          : router.pathname === '/clients'
                          ? ' stroke-fuchsia-300 hover:bg-fuchsia-500/10 hover:stroke-fuchsia-500 active:stroke-fuchsia-500'
                          : router.pathname === '/locations'
                          ? ' stroke-teal-500/70 hover:bg-white/10 hover:stroke-teal-500 active:stroke-teal-500'
                          : router.pathname === '/work'
                          ? ' stroke-red-500/70 hover:bg-white/10 hover:stroke-red-500 active:stroke-red-500'
                          : router.pathname === '/contact'
                          ? ' stroke-red-500/70 hover:bg-white/10 hover:stroke-red-500 active:stroke-red-500'
                          : '',
                        'relative z-10 -m-2 inline-flex items-center rounded-lg  p-2  [&:not(:focus-visible)]:focus:outline-none'
                      )}
                      aria-label="Toggle site navigation"
                    >
                      {({ open }) =>
                        open ? (
                          <ChevronUpIcon className="h-6 w-6" />
                        ) : (
                          <div className="fixed top-0 right-10 mt-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 shadow">
                            <MenuIcon className="h-6 w-6" />
                          </div>
                        )
                      }
                    </Popover.Button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <>
                          <Popover.Overlay
                            static
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                          />
                          <Popover.Panel
                            static
                            as={motion.div}
                            initial={{ opacity: 0, y: -32 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{
                              opacity: 0,
                              y: -32,
                              transition: { duration: 0.2 },
                            }}
                            className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pt-32 pb-6 shadow-2xl shadow-gray-900/20"
                          >
                            <div className="space-y-4">
                              <MobileNavLink href="/">Home</MobileNavLink>
                              <MobileNavLink href="/company">
                                Company
                              </MobileNavLink>
                              <MobileNavLink href="/locations">
                                Locations
                              </MobileNavLink>

                              <MobileNavLink href="/work">Work</MobileNavLink>
                              <MobileNavLink href="/clients">
                                Clients
                              </MobileNavLink>
                            </div>
                            <div className="mt-8 flex w-full flex-col gap-4 sm:w-fit">
                              <Button href="/contact" variant="solid">
                                Contact
                              </Button>
                            </div>
                          </Popover.Panel>
                        </>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </Popover>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}
