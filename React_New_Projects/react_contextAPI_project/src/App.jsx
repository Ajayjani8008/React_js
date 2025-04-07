import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import UserContext from './context/UserContext'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {

  return (
    <>
      <UserContextProvider>
        <h1>Hello World, react context api</h1>
        <Login/>
        <h2>  ___   </h2>
        <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
