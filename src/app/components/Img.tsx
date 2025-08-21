import React from 'react'

type Props = {
    src: string
    alt: string
    className?: string
}

export default function Img({ src, alt, className}: Props) {
  return (
    
    <img src={src} alt={alt} className={className} />
  )
}