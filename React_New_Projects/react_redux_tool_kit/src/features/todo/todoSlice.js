// Step 2 , create slice  (slice is just a piece (or partition) of your overall application state, along with the logic to handle that piece.)

// A slice = one small partition of your full Redux state.
// It also includes the logic to change that partition (actions + reducers).
// It makes Redux more modular, clean, and easier to manage.


import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello World" }]
}

// A reducer is a function that tells Redux how to change a piece of state when something happens.
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // When an action is dispatched using dispatch(someAction(payload)), Redux automatically calls the appropriate reducer function with two arguments:
            // state: This is the current state before the action is applied.
            // action: This is the action object, which contains:
            //  type: a string like "todo/addTodo" or "todo/removeTodo"
            //  payload: the data you passed when calling the action
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.text = action.payload.text
                }
                return todo
            })
        },

    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions // You do for individual action, These are action creators — functions you use to dispatch actions in your app: 🟩 Purpose: You use them in your components or middleware to tell Redux to do something.

export default todoSlice.reducer  // we do for store confrigration
// 🟩 Purpose: It tells Redux how to update the state when actions are dispatched.

/* Summeriztion : 
Redux calls your reducer function like reducer(currentState, actionObject)

state = current value from the store for this slice

action = the full action object { type, payload }

Redux Toolkit handles a lot of this wiring automatically so you write less boilerplate.
*/