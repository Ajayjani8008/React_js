import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '../features/todo/todoSlice'

function AddTodo({ input, setInput, editMode, editId, setEditMode, setEditId }) {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    if (editMode) {
      // Dispatch update action with id and new text
      dispatch(updateTodo({ id: editId, text: input }))
      // Reset edit mode
      setEditMode(false)
      setEditId(null)
    } else {
      // Add new todo
      dispatch(addTodo(input))
    }
    // Clear input field
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-x-3 mt-12">
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