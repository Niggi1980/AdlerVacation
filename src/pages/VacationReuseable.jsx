import React from 'react';
import '../css/vacation.css';
import backImageButton from '../assets/backButton.png';

export default function VacationReuseable({ name }) {
  return (
    <div className='mainContainer'>
      <div className='imageContainer'>
        <img className='backButton' src={backImageButton} alt='Back Button' />
      </div>
      <div className='textContainer'>
        <h1 className='headline'>{name}</h1>
      </div>
    </div>
  );
}
