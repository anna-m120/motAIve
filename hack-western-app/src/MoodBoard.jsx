import React from "react";
import './MoodBoard.css';
function MoodBoard() {
  const [isShownAverages, updateShownAverages] = React.useState(false);
  return (
    <div className="mood-box">
      
      <label for="cars">Choose your current mood:</label>
      <select onChange={() => updateShownAverages(true)}>
        <option disabled selected value> -- select an option -- </option>
        <option value="happy">Happy 🙂</option>
        <option value="okay">Okay 👍</option>
        <option value="frustrated">Frustrated 😤</option>
        <option value="need_support">Need Support 😔 </option>
      </select>
      {
        isShownAverages ?
          <div>
            <div>Your Average Mood: Happy 🙂</div>
            <div>Average Company Mood: Happy 🙂</div>
          </div> 
          :
          null
          }
    </div>
  );
}

export default MoodBoard;
