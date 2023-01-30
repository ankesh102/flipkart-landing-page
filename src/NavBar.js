import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    // <h1> NavBar</h1>
    <div className="navMain">
      <div className="leftLogo">
        <h1 id="logo">Flipkart</h1>
        <p id="logo2"> Explore <span className="plus"> plus</span></p>
      </div>

      <div className="topnav">
        <input type="text" placeholder="Search.." />
      </div>

      <div className="navRight">
        <h4 className="Log">Login</h4>
        <h4>Become a seller</h4>
        <h4>More</h4>
        <h4>Cart</h4>
      </div>


      
    </div>
  );
}

export default NavBar;
