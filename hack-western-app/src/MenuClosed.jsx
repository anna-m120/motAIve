import React from "react";
import './MenuClosed.css';

function Menu({updateIsHome}) {
  return (
    <div className="burger-closed">
      <div className="line l1"></div>
      <div className="line l2"></div>
      <div className="line l3"></div>
      {/* <button className="button" onClick={() =>  updateIsHome(true)}>Home</button>
      <button className="button" onClick={() =>  updateIsHome(false)}>My Info</button>
      <button className="log-out-button" onClick={() =>  updateIsHome(false)}>Log Out </button> */}
    </div>
  );
}

export default Menu;
