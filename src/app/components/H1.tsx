import React from 'react'

type Props = {
  children: React.ReactNode,
  className?: string
}

export default function H1({ children, className }: Props) {
  return (
    <h1 className={className}>
      {children}
    </h1>
  )
}
