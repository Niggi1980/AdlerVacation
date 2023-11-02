import React, { useEffect, useState } from 'react'
import BigHolder from '../components/BigHolder'
import "../css/homepage.css"
import AddButton from '../components/AddButton';
import Popup from '../components/Popup';

export default function homepage({trips, setTrips}) {
  const [showPopup, setShowPopup] = useState(false);

  function toggleAddContainer(){
    setShowPopup(!showPopup)
  }

  function addVacation(name) {
    if (!name) {
      return;
    }
  
    const newTrip = {
      name: name, 
      days: [],
    };
  
    setTrips([...trips, newTrip]);
    toggleAddContainer();
  }

  return (
    <div className='homepageContainer'>
      <h1 style={{marginBottom:"40px"}}>Adler Vacation</h1>
      {trips.map((trip, index)=>(
        <BigHolder key={index} headline={trip.name} urlPath={trip.name}></BigHolder>
      ))}
      {showPopup && (<Popup handleFunction={addVacation} placeholder="Destination..."></Popup>)}

      <AddButton handleFunction={toggleAddContainer}></AddButton>

      
    </div>
  )
}
