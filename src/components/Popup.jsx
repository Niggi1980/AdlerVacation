import React, { useEffect, useState } from 'react'
import "../css/popup.css"
import FloatingInput from './FloatingInput';

export default function Popup({ handleFunction, placeholder }) {
  const [vacationName, setVacationName] = useState();

  function handleInput(event){
    setVacationName(event.target.value)
  }


  return (
    <div className='popupCustom'>

      <FloatingInput inputFunction={handleInput}  className="" placeholder={placeholder}></FloatingInput>
      
      <button onClick={() => handleFunction(vacationName)} type="button" className="btn btn-primary mt-3 customAddButton">Hinzufügen</button>
    </div>
  )
}
