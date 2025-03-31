import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex min-h-screen items-center justify-center bg-blue-500 text-white text-3xl font-bold'>Test tailwind CSS</div>      
    </>
  )
}

export default App
