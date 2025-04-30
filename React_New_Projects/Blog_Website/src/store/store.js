import { configureStore } from '@reduxjs/toolkit'
import authService from '../appwrite/auth.js'
import authSlice from './authSlice.js'

const store = configureStore({
    reducer: {
        auth: authSlice,

        // add more slice for posts  
    }
})

export default store