'use client'
import { motion, useReducedMotion } from 'framer-motion'

interface Props {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p'
}

export function AnimatedWords({ text, className = '', as: Tag = 'h1' }: Props) {
  const reduce = useReducedMotion()
  const words = text.split(' ')

  if (reduce) {
    return <Tag className={className}>{text}</Tag>
  }

  return (
    <Tag className={`${className} overflow-hidden`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 + i * 0.12 }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  )
}
