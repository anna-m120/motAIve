import Dashboard from "./Dashboard.jsx"
import Menu from "./Menu.jsx"
import './Menu.css';
import './App.css';
import './TextBoxes.css';
import React from "react";

function App() {
  const [isHome, updateIsHome] = React.useState(true);
  return (
    <div>
      <div className="menu-bar">
        <Menu isHome={isHome} updateIsHome={updateIsHome}/>
        
      </div>
      {isHome ? <Dashboard isHome={isHome} updateIsHome={updateIsHome}/> : ""}
      <header className="text-box">
        Hello Blue! 
      </header>
    </div>
  );
}

export default App;
