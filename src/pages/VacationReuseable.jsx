import React, { useEffect, useState } from 'react'
import '../css/vacation.css';
import backImageButton from '../assets/backButton.png';
import { useNavigate } from 'react-router-dom';
import AddButton from '../components/AddButton';
import Popup from '../components/Popup';
import BigHolder from '../components/BigHolder';
import deletePic from "../assets/delete.png"


export default function VacationReuseable({ name, vacation, trips, setTrips, index }) {
    const navigate = useNavigate(); 
    const [showPopup, setShowPopup] = useState(false);

    function toggleAddContainer(){
      setShowPopup(!showPopup)
    }

    function deleteTrip(){
      const updatedTrips= [...trips]

      updatedTrips.splice(index, 1)
      setTrips(updatedTrips)
    }
  
    function addVacationDay(newDay) {
      if (!newDay) {
        return;
      }
    
      const updatedTrips = [...trips];
    
      updatedTrips[index].days.push({
        name: newDay,
        activities: []
      });
    
      setTrips(updatedTrips);
      toggleAddContainer()
    }

  return (
    <div className='mainContainer'>
      <div className='imageContainer' onClick={()=>navigate(`/`)}>
        <img className='backButton' src={backImageButton} alt='Back Button' />

          <div onClick={()=>{deleteTrip()}} className="deleteContainer">
          <img className='backButton' src={deletePic} alt="" />
        </div>

      </div>
      
      <div className='textContainer'>
        <h1 className='headline'>{name}</h1>
      </div>
      {showPopup && (<Popup handleFunction={addVacationDay} placeholder="Schniedel"></Popup>)}

      {vacation.days.map((day, index)=>(
        <BigHolder key={index} headline={day.name} urlPath={`${vacation.name}/${day.name}`}></BigHolder>
      ))}

      <AddButton handleFunction={toggleAddContainer}></AddButton>
    </div>
  );
}
