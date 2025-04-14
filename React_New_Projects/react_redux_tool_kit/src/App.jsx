import { useState } from 'react'
import './App.css'
import AppTodo from './components/AddTodo'
import Todods from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppTodo />
      <Todods />
    </>
  )
}

export default App

