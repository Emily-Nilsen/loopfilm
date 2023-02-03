import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function NavLinks() {
  const router = useRouter()
  let [hoveredIndex, setHoveredIndex] = useState(null)

  return [
    ['Home', '/'],
    ['Company', '/company'],
    ['Locations', '/locations'],
    ['Work', '/work'],
    ['Clients', '/clients'],
    ['Contact', '/contact'],
  ].map(([label, href], index) => (
    <Link
      key={label}
      href={href}
      className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-base text-white transition-colors delay-150 hover:text-white hover:delay-[0ms]"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className={classNames(
              router.pathname === '/'
                ? ' bg-sky-pink/50'
                : router.pathname === '/company'
                ? ' bg-fuchsia-200/20'
                : 'bg-white/10',
              'absolute inset-0 rounded-lg'
            )}
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">{label}</span>
    </Link>
  ))
}
