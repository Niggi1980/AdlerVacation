import React, { useEffect, useState } from 'react'
import BigHolder from '../components/BigHolder'
import "../css/homepage.css"
import AddButton from '../components/AddButton';
import Popup from '../components/Popup';

export default function homepage() {
  const [buttons, setButtons] = useState(["Japan", "Deutschland"]);
  const [showPopup, setShowPopup] = useState(false);

  function toggleAdd(){
    setShowPopup(!showPopup)
  }

  function addVacation(name){
    if(!name){return}

    setButtons([...buttons, name])
    toggleAdd()
  }


  return (
    <div className='homepageContainer'>
      <h1 style={{marginBottom:"40px"}}>Adler Vacation</h1>
      {buttons.map((button, index)=>(
        <BigHolder headline={button}></BigHolder>
      ))}
      {showPopup && (<Popup handleFunction={addVacation}></Popup>)}

      <AddButton handleFunction={toggleAdd}></AddButton>

      
    </div>
  )
}
