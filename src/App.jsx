import { useState, useRef, useEffect } from 'react'
import './App.css'
import PopupComp from "./components/PopupComp.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Homepage></Homepage>}></Route>       {/* every route is url which can be used index says its the starting point and element is the component which gets rendered */}
          <Route path='/Japan' element={<h1>Japan</h1>}></Route>        {/* path to set the target url */}
          <Route path='/Deutschland' element={<h1>Deutschland</h1>}></Route>
      </Routes>
    </BrowserRouter>
      

    
  )
}

export default App