import { useState, useRef, useEffect } from 'react'
import './App.css'
import PopupComp from "./components/PopupComp.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage'

function App() {
  const [buttons, setButtons] = useState(["Japan", "Deutschland"]);
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage buttons={buttons} setButtons={setButtons}></Homepage>}></Route>  

        {buttons.map((button, index)=>(
          <Route key={index} path={`/${button}`} element={<h1>{button}</h1>}></Route>
        ))}

      </Routes>
    </BrowserRouter>
      

    
  )
}

export default App