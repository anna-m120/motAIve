import Dashboard from "./Dashboard.jsx"
import Menu from "./Menu.jsx"
import './App.css';
import React from "react";

function App() {
  const [isHome, updateIsHome] = React.useState(false);
  return (
    <div>
      <header>
        Hello Blue! 
      </header>
      <Menu isHome={isHome} updateIsHome={updateIsHome}/>
      
      {isHome ? <Dashboard isHome={isHome} updateIsHome={updateIsHome}/> : "my info"}
    </div>
  );
}

export default App;
