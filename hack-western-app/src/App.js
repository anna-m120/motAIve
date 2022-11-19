import Dashboard from "./Dashboard.jsx";
import MyInfo from "./MyInfo.jsx";
import Menu from "./MenuClosed.jsx";
import './MenuClosed.css';
import './App.css';
import './TextBoxes.css';
import './Dashboard.css';
import './Chat.css';
import React from "react";
import MoodBoard from "./MoodBoard";
import Chat from "./Chat.jsx";

function App() {
  const [isHome, updateIsHome] = React.useState(true);
  return (
    <div className="app">
      <div className="menu-bar">
        <Menu isHome={isHome} updateIsHome={updateIsHome}/>
      </div>
      <div className="dashboard-container">
        <header className="text-box">Hello, Blue.</header>
        <div className="activities">
          {isHome ? <Dashboard isHome={isHome} updateIsHome={updateIsHome}/> : <MyInfo/>}
        </div>
      </div>
    </div>
  );
}

export default App;
