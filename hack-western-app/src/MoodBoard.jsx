import React from "react";
import './MoodBoard.css';
function MoodBoard() {
  const [isShownAverages, updateShownAverages] = React.useState(false);
  return (
    <div className="mood-box">
      <div class="scene scene--card">
      <div className={isShownAverages ? "card is-flipped" : "card"} >
        <div class="card__face card__face--front">
          <label for="selections">Choose your current mood:</label>
          <select id="selections" onChange={() => updateShownAverages(true)}>
            <option disabled selected value> -- select an option -- </option>
            <option value="happy">Happy 🙂</option>
            <option value="okay">Okay 👍</option>
            <option value="frustrated">Frustrated 😤</option>
            <option value="need_support">Need Support 😔 </option>
          </select>
        </div>
        <div class="card__face card__face--back">
          <div>
              <div>Your Average Mood: Happy 🙂</div>
              <div>Average Company Mood: Happy 🙂</div>
              <button onClick={() => updateShownAverages(false)}>Edit</button>
          </div> 
        </div>
      </div>
    </div>
    </div>
  );
}

export default MoodBoard;
