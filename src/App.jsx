import { useState, useRef, useEffect } from 'react'
import './App.css'
import PopupComp from "./components/PopupComp.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage'
import VacationReuseable from './pages/VacationReuseable';

function App() {
  const [trips, setTrips] = useState([]);


  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage trips={trips} setTrips={setTrips}></Homepage>}></Route>

        {trips.map((trip, index) => (
          <Route key={index} path={`/${trip.name}`} element={<VacationReuseable name={trip.name}
            trips={trips}
            vacation={trips[index]}
            index={index}
            setTrips={setTrips}
          />} />
        ))}





      </Routes>
    </BrowserRouter >

  )
}

export default App