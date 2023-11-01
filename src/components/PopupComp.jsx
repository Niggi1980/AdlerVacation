import React, { useState } from 'react';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [newButtonName, setNewButtonName] = useState('');
  const [buttons, setButtons] = useState([]);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const createNewButton = () => {
    setButtons([...buttons, <button key={buttons.length}>{newButtonName}</button>]);
    setNewButtonName('');
    closePopup();
  };

  return (
    <div>
      <button onClick={openPopup}>+</button>
      {showPopup && (
        <div className="popup">
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
      <div>
        {buttons.map((button, index) => (
          <div key={index}>{button}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
