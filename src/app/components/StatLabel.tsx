import React from 'react'

type Props = {
    children: React.ReactNode   

    className?: string

}

export default function StatLabel({ children , className}: Props) {
  return (
    <p className={className}>{children}</p>
  )
}