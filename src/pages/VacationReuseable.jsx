import React, { useEffect, useState } from 'react'
import '../css/vacation.css';
import backImageButton from '../assets/backButton.png';
import { useNavigate } from 'react-router-dom';
import AddButton from '../components/AddButton';
import Popup from '../components/Popup';


export default function VacationReuseable({ name }) {
    const navigate = useNavigate(); 
    const [showPopup, setShowPopup] = useState(false);

    function toggleAddContainer(){
      setShowPopup(!showPopup)
    }
  
    function addVacation(name){
      if(!name){return}
  
      setButtons([...buttons, name])
      toggleAddContainer()
    }
  
  return (
    <div className='mainContainer'>
      <div className='imageContainer' onClick={()=>navigate(`/`)}>
        <img className='backButton' src={backImageButton} alt='Back Button' />
      </div>
      <div className='textContainer'>
        <h1 className='headline'>{name}</h1>
      </div>
      {showPopup && (<Popup handleFunction={addVacation} placeholder="Schniedel"></Popup>)}
      <AddButton handleFunction={toggleAddContainer}></AddButton>
    </div>
  );
}
