'use client'

import { useEffect, useState } from 'react'

interface TypingTextProps {
  phrases: string[]
  className?: string
}

export function TypingText({ phrases, className }: TypingTextProps) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[index]

    if (!deleting && subIndex === current.length) {
      const pause = setTimeout(() => setDeleting(true), 1600)
      return () => clearTimeout(pause)
    }

    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % phrases.length)
      return
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1))
      },
      deleting ? 45 : 90,
    )

    return () => clearTimeout(timeout)
  }, [subIndex, deleting, index, phrases])

  return (
    <span className={className}>
      {phrases[index].substring(0, subIndex)}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-primary" />
    </span>
  )
}
