import MoodBoard from "./MoodBoard.jsx";
import PreviousDay from "./PreviousDay.jsx";
import Chat from "./Chat.jsx";
import './Chat.css';
import './PreviousDay.css';
import './TextBoxes.css';

function Dashboard() {
  return (
    <div>
      <MoodBoard/>
      <div className="chat-container">
        <Chat/>
      </div>
      <header className="summary-title">
          Summary of Suggestions
      </header>
      <div className="previous-container">
        <PreviousDay/>
      </div>
      
    </div>
  );
}

export default Dashboard;
