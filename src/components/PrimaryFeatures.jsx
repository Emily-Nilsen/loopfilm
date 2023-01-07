import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'

import { Container } from '@/components/Container'

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for LoopFilm"
      className="bg-white py-20 sm:py-32"
    >
      <Container></Container>
    </section>
  )
}
