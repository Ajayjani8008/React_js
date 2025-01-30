import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [a, setA] = useState(0);

  const addA = () => {
    setA(prevA => prevA + 5);  // ✅ Functional state update
  };

  const removeA = () => {
    setA(prevA => (prevA <= 0 ? 0 : prevA - 5));  // ✅ Avoid modifying state directly
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* Displaying the value of `a` */}
      <h2>Value: {a}</h2>  

      <div>
        <button onClick={addA}>Increase by 5</button>
        <button onClick={removeA}>Decrease by 5</button>
      </div>
    </>
  );
}

export default App;
