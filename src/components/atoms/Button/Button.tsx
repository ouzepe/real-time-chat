import { type } from 'os';
import React from 'react'

interface ButtonProps {
  title: string;
  type: 'submit';
}


export const Button = ({title, type }: ButtonProps) => {
  return (
    <button className='w-full h-10 mt-5 bg-blue-400 text-white rounded' type={type}>{title}</button>
  )
}
