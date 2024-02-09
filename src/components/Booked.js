import React from "react";
import "./Booked.css";

function Booked({ onOKClick }) {
  return (
    <div className="overlay">
      <div className="popup-box">
        <div className="popup-content">
          <h2>Vaša rezervacija je uspješna!</h2>
          <button className="ok-button" onClick={onOKClick}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default Booked;
