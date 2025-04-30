import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import authSerivce from './appwrite/auth.js'

import { login, logout } from './store/authSlice.js'

import { Header, Footer } from './components/index.js'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authSerivce.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? <div className='min-h-screen min-w-svh flex flex-wrap content-between bg-gray-600 justify-center'>
    <div className='w-full block'>
      <Header />


      <Footer />
    </div>

  </div> : null
}

export default App
