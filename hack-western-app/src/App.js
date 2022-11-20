import Dashboard from "./Dashboard.jsx";
import MyInfo from "./MyInfo.jsx";
import Menu from "./MenuClosed.jsx";
import MenuOpen from "./MenuOpen.jsx";
import './MenuClosed.css';
import './App.css';
import './TextBoxes.css';
import './Dashboard.css';
import React from "react";
import Questionaire from "./Questionaire.jsx";

function App() {
  const [isHome, updateIsHome] = React.useState(true);
  const [showQuestionaire, updateShowQuestionaire] = React.useState(false);
  const [isMenuBar, updateShowMenuBar] = React.useState(true);
  return (
    <div className="app">
      {
        isMenuBar ?
        <div onClick={() => updateShowMenuBar(false)}  className="menu-bar">
        <Menu isHome={isHome} updateIsHome={updateIsHome}/>
      </div>
        :
        <div onClick={() => updateShowMenuBar(true)}  className="menu-bar-open">
        <MenuOpen isHome={isHome} updateIsHome={updateIsHome}/>
        </div>
      }
      
      {
        showQuestionaire ? 
      <div className="dashboard-container">
        <header className="text-box">
          Hello, Blue. 
        </header>
        {isHome ? <Dashboard isHome={isHome} updateIsHome={updateIsHome}/> : <MyInfo/>}
        </div>
        
    :
    <div className="dashboard-container">
    <Questionaire hideQuestionaire={() => updateShowQuestionaire(true)}/>
    </div>
      }
      </div>
  );
}

export default App;