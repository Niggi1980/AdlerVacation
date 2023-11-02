import React, { useState } from 'react'
import "../css/bigholder.css"
import { useNavigate } from 'react-router-dom';

export default function BigHolder({headline}) {
    const navigate = useNavigate(); 
    
    return (
        <div onClick={()=>navigate(`/${headline}`)}  className='mainholder'>
            <h1 className='containerHeadline'>{headline}</h1>
        </div>
    )
}
