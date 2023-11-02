import React from 'react'
import "../css/addbutton.css"

export default function AddButton({handleFunction}) {
  return (
    <div onClick={()=>handleFunction()} className='addButton'>
        <p className='addButtonSymbol'>+</p>
    </div>
  )
}
