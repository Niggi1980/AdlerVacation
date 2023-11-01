import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestComp from './components/TestComp.jsx'
import PopupComp from "./components/PopupComp.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<PopupComp></PopupComp>}></Route>       {/* every route is url which can be used index says its the starting point and element is the component which gets rendered */}
          <Route path='/1' element={<h1>1</h1>}></Route>        {/* path to set the target url */}
      </Routes>
    </BrowserRouter>
      

    
  )
}

export default App