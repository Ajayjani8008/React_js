import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [input, setInput] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [editId, setEditId] = useState(null)

  return (
      <div className="min-h-screen bg-gray-900 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-white text-center mb-8">Redux Toolkit Todo App</h1>
          <AddTodo
            input={input}
            setInput={setInput}
            editMode={editMode}
            editId={editId}
            setEditMode={setEditMode}
            setEditId={setEditId}
          />
          <Todos
            setInput={setInput}
            setEditMode={setEditMode}
            setEditId={setEditId}
          />
        </div>
      </div>
    )
}

export default App