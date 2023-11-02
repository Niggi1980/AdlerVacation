import { useState, useRef, useEffect } from 'react'
import './App.css'
import PopupComp from "./components/PopupComp.jsx"
import { BrowserRouter, Routes, Route, json } from "react-router-dom";
import Homepage from './pages/homepage'
import VacationReuseable from './pages/VacationReuseable';

function App() {
  const [trips, setTrips] = useState(()=>{
    const loadedTrips= JSON.parse(localStorage.getItem("trips"))
    return isNaN(loadedTrips) ? loadedTrips : []
  });

  useEffect(()=>{
    localStorage.setItem("trips", JSON.stringify(trips))
  },[trips])


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

        {trips.map((trip, index) => (
          trip.days.map((day, index) => (
            <Route path={`/${trip.name}/${day.name}`} element={<h1>{day.name}</h1>}></Route>
          ))
        ))}


      </Routes>
    </BrowserRouter >

  )
}

export default App