import React, { useEffect, useState } from 'react'
import BigHolder from '../components/BigHolder'
import "../css/homepage.css"
import AddButton from '../components/AddButton';
import Popup from '../components/Popup';

export default function homepage({buttons, setButtons}) {
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
    <div className='homepageContainer'>
      <h1 style={{marginBottom:"40px"}}>Adler Vacation</h1>
      {buttons.map((button, index)=>(
        <BigHolder key={index} headline={button}></BigHolder>
      ))}
      {showPopup && (<Popup handleFunction={addVacation}></Popup>)}

      <AddButton handleFunction={toggleAddContainer}></AddButton>

      
    </div>
  )
}
