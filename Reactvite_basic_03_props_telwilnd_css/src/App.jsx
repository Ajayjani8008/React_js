import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500'>Teilwind Test</h1>

      <div className='bg-red-950'>
        This Container Dedicataed to Tailwind CSS
      </div>

      <Card username="Ajay Jani" btnText="Join Us"/>
      <Card username="Amit Jani" />
    </>
  )
}

export default App
