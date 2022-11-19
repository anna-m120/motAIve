import Dashboard from "./Dashboard.jsx"
import Menu from "./Menu.jsx"
import './Menu.css';
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
          Hello Blue! 
        </header>
          {isHome ? <Dashboard isHome={isHome} updateIsHome={updateIsHome}/> : ""}
        </div>
    </div>
  );
}

export default App;
