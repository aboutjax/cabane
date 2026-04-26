'use client'
import React from 'react'
import { motion } from 'motion/react'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

type Props = {
  data: DefaultTypedEditorState
  delay?: number
  className?: string
  style?: React.CSSProperties
}

type LexicalNode = {
  type: string
  text?: string
  children?: LexicalNode[]
}

function extractWords(nodes: LexicalNode[]): string[] {
  const words: string[] = []
  for (const node of nodes) {
    if (node.text) {
      words.push(...node.text.split(/\s+/).filter(Boolean))
    }
    if (node.children) {
      words.push(...extractWords(node.children))
    }
  }
  return words
}

function buildDelays(count: number, baseDelay: number): number[] {
  const delays: number[] = []
  let t = baseDelay
  for (let i = 0; i < count; i++) {
    delays.push(t)
    // Random stagger between 20ms and 80ms, with occasional longer pauses
    const jitter = 0.001 + Math.random() * 0.01
    const pause = Math.random() < 0.15 ? 0.12 : 0 // ~15% chance of a brief pause
    t += jitter + pause
  }
  return delays
}

export const AnimatedText: React.FC<Props> = ({ data, delay = 0, className, style }) => {
  const words = extractWords((data?.root?.children as LexicalNode[]) ?? [])
  const delays = React.useMemo(() => buildDelays(words.length, delay), [words.length, delay])
  const [done, setDone] = React.useState(false)

  if (done) {
    return (
      <div className={className} style={style}>
        {words.map((word, i) => (
          <span key={i} className="inline-block mr-[0.25em]">
            {word}
          </span>
        ))}
      </div>
    )
  }

  const lastIndex = words.length - 1

  return (
    <div className={className} style={style}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: delays[i] }}
          onAnimationComplete={i === lastIndex ? () => setDone(true) : undefined}
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}
