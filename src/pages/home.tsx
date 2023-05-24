import HomeTemplate from '@/components/templates/Home/Home'
import React from 'react'

export default function home() {
  return (
    <main>
      <HomeTemplate
        user='test'
        pass='test123'
      />
    </main>
  )
}
