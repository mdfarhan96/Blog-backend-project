import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Background.css"
const Header = () => {
  return (
    <div>
      <div className="ht1">
        <div className="ht11">The</div>
        <span className="ht12">Siren</span>
      </div>
      <div className="flex1">
          <div><NavLink to="/home" style={({ isActive }) => { return {color: isActive ? 'blue' : "Black",textDecoration: "none",} }}> Home </NavLink></div>    
          <div><NavLink to="/tollywood" style={({ isActive }) => { return {color: isActive ? "blue" : "Black",textDecoration: "none",} }}> Tollywood </NavLink></div>
          <div><NavLink to="/technology" style={({ isActive }) => { return {color: isActive ? "blue" : "Black",textDecoration: "none",} }}> Technology </NavLink></div>    
          <div><NavLink to="/jobs" style={({ isActive }) => { return {color: isActive ? "blue" : "Black",textDecoration: "none",} }}> Food </NavLink></div>
          <div><NavLink to="/nature" style={({ isActive }) => { return {color: isActive ? "blue" : "Black",textDecoration: "none",} }}> Tourism </NavLink></div>    
          <div><NavLink to="/about" style={({ isActive }) => { return {color: isActive ? "blue" : "Black",textDecoration: "none",} }}> About Us </NavLink></div>
      </div>
      <br /><br />
      <hr />
    </div>
  );
};

export default Header;