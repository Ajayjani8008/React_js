import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200 flex items-center justify-center" style={{ backgroundColor: color }}>
      <div className="fixed bottom-12 w-full flex justify-center">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white p-4 rounded-full">
          <button
            className="outline-none w-20 h-20 rounded-full border-2 border-gray-300 flex items-center justify-center"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none w-20 h-20 rounded-full border-2 border-gray-300 flex items-center justify-center"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none w-20 h-20 rounded-full border-2 border-gray-300 flex items-center justify-center"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none w-20 h-20 rounded-full border-2 border-gray-300 flex items-center justify-center"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className="outline-none w-20 h-20 rounded-full border-2 border-gray-300 flex items-center justify-center"
            style={{ backgroundColor: "black", color: "white" }}
            onClick={() => setColor("black")}
          >
            Black
          </button>
          <button
            className="outline-none w-20 h-20 rounded-full border-2 border-gray-300 flex items-center justify-center"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="outline-none w-20 h-20 rounded-full border-2 border-gray-300 flex items-center justify-center"
            style={{ backgroundColor: "olive" }}
            onClick={() => setColor("olive")}
          >
            Olive
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
