import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-700 flex justify-center items-center'>
    <div className='text-white text-4xl p-12 item-center' >User : {userid}</div>
    </div>
  )
}

export default User