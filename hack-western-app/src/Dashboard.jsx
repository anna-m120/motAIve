import MoodBoard from "./MoodBoard.jsx";
import PreviousDay from "./PreviousDay.jsx";
import Chat from "./Chat.jsx";

function Dashboard() {
  return (
    <div>
      <MoodBoard/>
      <Chat/>
      <PreviousDay/>
    </div>
  );
}

export default Dashboard;
