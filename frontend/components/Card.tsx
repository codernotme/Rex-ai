import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  title?: string
  className?: string
}

const Card = ({ children, title, className = '' }: CardProps) => {
  return (
    <div className={`card ${className}`}>
      {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
      {children}
    </div>
  )
}

export default Card

