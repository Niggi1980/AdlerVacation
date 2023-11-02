import React, { useState } from 'react';
import "../css/popup.css"
import { useNavigate } from 'react-router-dom';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [newButtonName, setNewButtonName] = useState('');
  const [buttons, setButtons] = useState([]);
  const navigate = useNavigate();             // the function you´ll use for navigating to different URL´s

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const createNewButton = () => {
    setButtons([...buttons, <button onClick={()=>navigate(`/${newButtonName}`)} key={buttons.length}>{newButtonName}</button>]);      {/* Button now redirects to url/buttonname */}
    setNewButtonName('');
    closePopup();
  };

  return (
    <div>
      
      <button onClick={openPopup}>+</button>
      {showPopup && (
        <div className="popupCustom">
          <input
            type="text"
            placeholder=""
            value={newButtonName}
            onChange={(e) => setNewButtonName(e.target.value)}
          />
          <button onClick={createNewButton}>Erstellen</button>
          <button onClick={closePopup}>Abbrechen</button>
        </div>
      )}
      <div style={{margin:"10px"}}>       {/* inline styles for space between Tage div and this div | and margin between each button */}
        {buttons.map((button, index) => (
          <div style={{margin:"10px"}} key={index}>{button}</div>     
        ))}
      </div>
    </div>
  );
}

export default App;
