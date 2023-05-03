import React from 'react'

interface ButtonProps {
    className: string;
    title: string;
}


export const Button = ({className, title }: ButtonProps) => {
  return (
    <button>Button</button>
  )
}
