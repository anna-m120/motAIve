import React from "react";
import './MenuOpen.css';

function MenuOpen({updateIsHome}) {
  return (
    <div className="burger-open">
     
      <div className="menu_bar_item_thing"><button className="button">Home</button></div>
      <div className="menu_bar_item_thing"><button className="log-out-button">Log Out </button></div>
    </div>
  );
}

export default MenuOpen;