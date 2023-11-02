import React, { useState } from 'react'
import "../css/bigholder.css"
import { useNavigate } from 'react-router-dom';

export default function BigHolder({headline, urlPath}) {
    const navigate = useNavigate(); 
    
    return (
        <div onClick={()=>navigate(`/${urlPath}`)}  className='mainholder'>
            <h1 className='containerHeadline'>{headline}</h1>
        </div>
    )
}
