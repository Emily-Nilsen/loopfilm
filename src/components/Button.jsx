import { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-lg py-3 px-4 font-semibold outline-2 outline-offset-2 transition-colors duration-300 ease-in-out transition',
  outline:
    'inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] outline-2 outline-offset-2 transition-colors',
}

const variantStyles = {
  solid: {
    rose: 'relative overflow-hidden bg-sky-pink/95 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-sky-orange active:text-white/80 before:transition-colors',
    white:
      'bg-white/80 text-GPN-dark-blue hover:bg-white active:bg-white/90 active:text-GPN-dark-blue/70',
    gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80',
    teal: 'bg-teal-500 text-white hover:bg-teal-600 active:bg-teal-600 active:text-white/80',
  },
  outline: {
    gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80',
  },
}

export const Button = forwardRef(function Button(
  { variant = 'solid', color = 'gray', className, href, ...props },
  ref
) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  )

  return href ? (
    <Link ref={ref} href={href} className={className} {...props} />
  ) : (
    <button ref={ref} className={className} {...props} />
  )
})
