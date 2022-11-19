import React from "react";
function Menu({isHome, updateIsHome}) {
  return (
    <div>
      <button onClick={() =>  updateIsHome(true)}>Home</button>
      <button onClick={() =>  updateIsHome(false)}>My Info</button>
    </div>
  );
}

export default Menu;
