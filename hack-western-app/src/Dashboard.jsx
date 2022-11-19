import MoodBoard from "./MoodBoard.jsx";
import PreviousDay from "./PreviousDay.jsx";
import Chat from "./Chat.jsx";
import './Chat.css';
import './PreviousDay.css';

function Dashboard() {
  return (
    <div>
      <MoodBoard/>
      <div className="chat-container">
        <Chat/>
      </div>
      <div className="previous-container">
        <PreviousDay/>
      </div>
      
    </div>
  );
}

export default Dashboard;
