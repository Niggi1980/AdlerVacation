import React, { useState } from 'react'
import "../css/popup.css"

export default function Popup({handleFunction}) {
    const [vacationName, setVacationName]= useState();


  return (
    <div className='popupCustom'>
        <input onChange={(event)=>{setVacationName(event.target.value)}} className='popupInput' type="text" placeholder='Destination...' />
        <button onClick={()=>handleFunction(vacationName)} className='popupAddButton'>Add</button>
    </div>
  )
}
