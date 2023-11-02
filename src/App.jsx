import { useState, useRef, useEffect } from 'react'
import './App.css'
import PopupComp from "./components/PopupComp.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage'
import VacationReuseable from './pages/VacationReuseable';

function App() {
  const [trips, setTrips] = useState([{
    name: 'Japan', // Trip name
    days: [
      // Array of days, each containing activities
      {
        name: 'Day 1', // Day name
        activities: ["Schniedel, Lümmel"],
      },
    ],
  }]);
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage buttons={trips} setButtons={setTrips}></Homepage>}></Route>  

        {trips.map((button, index)=>(
          <Route key={index} path={`/${button.name}`} element={<VacationReuseable name={button.name}></VacationReuseable>}></Route>
        ))}

      </Routes>
    </BrowserRouter>
      
  )
}

export default App