import React from 'react'

export interface MessageProps {
  title: string;
}
export default function MessageError({title} : MessageProps) {
  return (
    <div className='text-red-400 mt-2'>{title}</div>
  )
}
