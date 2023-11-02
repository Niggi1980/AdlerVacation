import React, { useState } from 'react'
import "../css/popup.css"

export default function Popup({handleFunction, placeholder}) {
    const [vacationName, setVacationName]= useState();


  return (
    <div className='popupCustom'>
        <input onChange={(event)=>{setVacationName(event.target.value)}} className='popupInput' type="text" placeholder={placeholder} />
        <button onClick={()=>handleFunction(vacationName)} className='popupAddButton'>Add</button>
    </div>
  )
}
