import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, updateTodo } from '../features/todo/todoSlice'
// dispatch action mean we send an action to the store(redux store)

function AddTodo() {
  const [input, setInput] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [editId, setEditId] = useState(null)
  const dispatch = useDispatch()


  const todos = useSelector(state => state.todos)

  const addTodoHandler = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    if (editMode) {
      dispatch(updateTodo({ id: editId, text: input }))
      setEditMode(false)
      setEditId(null)
    } else {
      dispatch(addTodo(input))
    }

    setInput('')
  }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className={`text-white ${editMode ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-indigo-500 hover:bg-indigo-600'} border-0 py-2 px-6 focus:outline-none rounded text-lg`}
      >
        {editMode ? 'Update Todo' : 'Add Todo'}
      </button>
    </form>
  )
}

export default AddTodo