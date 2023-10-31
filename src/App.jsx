import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const zahl = useRef(5);

  function setZahl() {
    return <h1>{zahl.current}</h1>
  }
  
  useEffect(()=>{
    console.log("Run")
  },[])

  return (
    <div>
      <div>doof counter {count}</div>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>

  )
}

export default App