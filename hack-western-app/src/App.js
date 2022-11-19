import Dashboard from "./Dashboard.jsx";
import MyInfo from "./MyInfo.jsx";
import Menu from "./MenuClosed.jsx";
import './MenuClosed.css';
import './App.css';
import './TextBoxes.css';
import './Dashboard.css';
import React from "react";

function App() {
  const [isHome, updateIsHome] = React.useState(true);
  return (
    <div className="app">
      <div className="menu-bar">
        <Menu isHome={isHome} updateIsHome={updateIsHome}/>
      </div>
      <div className="dashboard-container">
        <header className="text-box">
          Hello, Blue. 
        </header>
        {isHome ? <Dashboard isHome={isHome} updateIsHome={updateIsHome}/> : <MyInfo/>}
        </div>
    </div>
  );
}

export default App;
