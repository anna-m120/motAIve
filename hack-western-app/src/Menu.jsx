import React from "react";
import './Menu.css';
function Menu({updateIsHome}) {
  return (
    <div>
      <button className="button" onClick={() =>  updateIsHome(true)}>Home</button>
      <button className="button" onClick={() =>  updateIsHome(false)}>My Info</button>
      <button className="log-out-button" onClick={() =>  updateIsHome(false)}>Log Out </button>
    </div>
  );
}

export default Menu;
