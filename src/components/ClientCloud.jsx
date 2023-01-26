import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
// To use the interceptor
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'

export function ClientCloud() {
  // Specify a number between 0 and 1
  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  })

  const imageReelOne = useAnimation()
  const imageReelTwo = useAnimation()
  const imageReelThree = useAnimation()

  const reelOne = [
    {
      id: 1,
      image:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1674672733/Loop%20Film/willFerrel_bnx1jv.webp',
      alt: 'Will Ferrel',
      logo: '',
      link: '',
    },
    {
      id: 2,
      image:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1674672724/Loop%20Film/napapijri_xk6miy.webp',
      alt: 'Will Ferrel',
      logo: '',
      link: '',
    },
    {
      id: 3,
      image:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1674672697/Loop%20Film/bmw_w6aspo.webp',
      alt: 'Will Ferrel',
      logo: '',
      link: '',
    },
    {
      id: 4,
      image:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1674672678/Loop%20Film/biotherm-v2_gwgfdw.webp',
      alt: 'Will Ferrel',
      logo: '',
      link: '',
    },
    {
      id: 5,
      image:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1674672653/Loop%20Film/allstate_a90ilx.webp',
      alt: 'Will Ferrel',
      logo: '',
      link: '',
    },
    {
      id: 6,
      image:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1674678828/Loop%20Film/essalunga_wismzp.webp',
      alt: 'Will Ferrel',
      logo: '',
      link: '',
    },
    {
      id: 7,
      image:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1674678822/Loop%20Film/apple_b6tom0.webp',
      alt: 'Will Ferrel',
      logo: '',
      link: '',
    },
  ]

  const reelTwo = [
    {
      id: 8,
      image:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1674678822/Loop%20Film/apple_b6tom0.webp',
      alt: 'Will Ferrel',
      logo: '',
      link: '',
    },
    {
      id: 9,
      image:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1674672724/Loop%20Film/napapijri_xk6miy.webp',
      alt: 'Will Ferrel',
      logo: '',
      link: '',
    },
    {
      id: 10,
      image:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1674672697/Loop%20Film/bmw_w6aspo.webp',
      alt: 'Will Ferrel',
      logo: '',
      link: '',
    },

    {
      id: 11,
      image:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1674672733/Loop%20Film/willFerrel_bnx1jv.webp',
      alt: 'Will Ferrel',
      logo: '',
      link: '',
    },
    {
      id: 12,
      image:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1674672678/Loop%20Film/biotherm-v2_gwgfdw.webp',
      alt: 'Will Ferrel',
      logo: '',
      link: '',
    },
    {
      id: 13,
      image:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1674672653/Loop%20Film/allstate_a90ilx.webp',
      alt: 'Will Ferrel',
      logo: '',
      link: '',
    },
    {
      id: 14,
      image:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1674678828/Loop%20Film/essalunga_wismzp.webp',
      alt: 'Will Ferrel',
      logo: '',
      link: '',
    },
  ]

  const reelThree = [
    {
      id: 15,
      image:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1674672733/Loop%20Film/willFerrel_bnx1jv.webp',
      alt: 'Will Ferrel',
      logo: '',
      link: '',
    },
    {
      id: 16,
      image:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1674672724/Loop%20Film/napapijri_xk6miy.webp',
      alt: 'Will Ferrel',
      logo: '',
      link: '',
    },
    {
      id: 17,
      image:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1674672697/Loop%20Film/bmw_w6aspo.webp',
      alt: 'Will Ferrel',
      logo: '',
      link: '',
    },
    {
      id: 18,
      image:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1674672678/Loop%20Film/biotherm-v2_gwgfdw.webp',
      alt: 'Will Ferrel',
      logo: '',
      link: '',
    },
    {
      id: 19,
      image:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1674672653/Loop%20Film/allstate_a90ilx.webp',
      alt: 'Will Ferrel',
      logo: '',
      link: '',
    },
    {
      id: 20,
      image:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1674678828/Loop%20Film/essalunga_wismzp.webp',
      alt: 'Will Ferrel',
      logo: '',
      link: '',
    },
    {
      id: 21,
      image:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1674678822/Loop%20Film/apple_b6tom0.webp',
      alt: 'Will Ferrel',
      logo: '',
      link: '',
    },
  ]

  // Image Reel One
  useEffect(() => {
    if (inView) {
      imageReelOne.start({
        x: '-20vw',
        transition: {
          delay: 0,
          duration: 15,
          ease: 'circOut',
        },
      })
    }
    if (!inView) {
      imageReelOne.start({ x: 0 })
    }
  }, [inView, imageReelOne])

  // Image Reel Two
  useEffect(() => {
    if (inView) {
      imageReelTwo.start({
        x: '20vw',
        scale: 1.1,
        transition: {
          delay: 0,
          duration: 13,
          ease: 'easeOut',
        },
      })
    }
    if (!inView) {
      imageReelTwo.start({ x: 0, scale: 1.1 })
    }
  }, [inView, imageReelTwo])

  // Image Reel Three
  useEffect(() => {
    if (inView) {
      imageReelThree.start({
        x: '-20vw',
        transition: {
          delay: 0,
          duration: 14,
          ease: 'anticipate',
        },
      })
    }
    if (!inView) {
      imageReelThree.start({ x: 0 })
    }
  }, [inView, imageReelThree])

  // useEffect(() => {
  //   let animationInterval = setInterval(animate, 5000) // call animate every 5 seconds
  //   return () => clearInterval(animationInterval)
  // }, [])

  // useEffect(() => {
  //   let animationInterval = null
  //   if (inView) {
  //     animationInterval = setInterval(imageReelThree, 5000)
  //   }
  //   return () => clearInterval(animationInterval)
  // }, [inView])

  return (
    <div className="bg-white sm:pb-0">
      <div
        id="instagram"
        ref={ref}
        className="my-0 w-screen overflow-x-hidden bg-zinc-50 pb-0"
      >
        <div className="relative mx-auto h-[50vh] w-[100vw] overflow-hidden overflow-x-hidden rounded-none bg-rose-300 lg:h-[50vh]">
          {/* Image Reel One */}
          <motion.div
            animate={imageReelOne}
            className="absolute grid h-1/3 w-[140vw] grid-cols-7 overflow-hidden"
          >
            {reelOne.map((item, index) => (
              <div
                key={item.id}
                className="relative col-span-1 flex h-full w-full justify-center overflow-hidden object-cover object-center"
              >
                <Image
                  src={item.image}
                  alt="LoopFilm"
                  className="object-cover object-center"
                  fill
                  unoptimized={true}
                />
              </div>
            ))}
          </motion.div>

          {/* Image Reel Two */}
          <motion.div
            animate={imageReelTwo}
            className="absolute top-1/3 right-0 z-10 grid h-1/3 w-[140vw] grid-cols-7 overflow-hidden shadow-lg"
          >
            {reelTwo.map((item, index) => (
              <div
                key={item.id}
                className="relative col-span-1 flex h-full w-full justify-center overflow-hidden bg-rose-100 object-cover object-center"
              >
                <Image
                  src={item.image}
                  alt="LoopFilm"
                  className="object-cover object-center"
                  fill
                  unoptimized={true}
                />
              </div>
            ))}
          </motion.div>

          {/* Image Reel Three */}
          <motion.div
            animate={imageReelThree}
            className="absolute bottom-0 grid h-1/3 w-[140vw] grid-cols-7 overflow-hidden"
          >
            {reelThree.map((item, index) => (
              <div
                key={item.id}
                className="relative col-span-1 flex h-full w-full justify-center overflow-hidden bg-purple-400 object-cover object-center"
              >
                <Image
                  src={item.image}
                  alt="LoopFilm"
                  className="object-cover object-center"
                  fill
                  unoptimized={true}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
