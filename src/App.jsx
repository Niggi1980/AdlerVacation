import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const zahl = useRef(5);
  useEffect(()=>{
    console.log("Run")
  },[])

//Testfunktion
function testButton () {      
  console.log(`hello test`)
}

  return (

    <div>
      <button onClick={testButton}>test</button>
      <p></p>
      <button onClick={testButton}>+</button>
    </div>
  )
}

export default App