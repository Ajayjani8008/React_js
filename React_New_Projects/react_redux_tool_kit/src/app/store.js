//  Step 1  , configure store 
import { configureStore } from '@reduxjs/toolkit';
// Step 2 , get reducer form  slices 

import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer:todoReducer
})
