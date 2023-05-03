import { Inter } from 'next/font/google'
import Login from "@/components/templates/Login/Login";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='h-full w-full'>
      <Login/>
    </main>
  )
}
