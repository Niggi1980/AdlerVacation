import React, { useEffect, useState } from 'react'
import BigHolder from '../components/BigHolder'
import "../css/homepage.css"
import Popup from '../components/Popup';
import ModalAddButton from '../components/ModalAddButton';

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
      <h1 style={{marginBottom:"40px", fontWeight:"700"}}>Adler Vacation</h1>
      {trips.map((trip, index)=>(
        <BigHolder key={index} headline={trip.name} urlPath={trip.name}></BigHolder>
      ))}
    
      <ModalAddButton title="Put in Destination" handleFunction={addVacation} placeholder={"Destination"}></ModalAddButton>

    </div>
  )
}
