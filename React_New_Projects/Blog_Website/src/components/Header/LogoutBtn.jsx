import React from 'react'
import { useDispatch } from 'react-redux'

import authService from '../../appwrite/auth.js'
import { logout } from '../../store/authSlice.js'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        }).catch((err) => console.log(err))

    }

    return (
        <button className=' inline-block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full' onClick={logoutHandler}>Logout</button>

    )
}

export default LogoutBtn
