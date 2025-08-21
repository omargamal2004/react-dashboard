import React from 'react'

type Props = {
    children?: React.ReactNode,
    className?: string
}

export default function H2({ children, className}: Props) {
  return (

    <h2 className={className}>{children}</h2>


  )
  
}
