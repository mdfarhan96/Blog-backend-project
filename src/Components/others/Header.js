import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Background.css";
const Header = () => {
  return (
    <div>
      <div className="logo">
        <div className="text-vertical">The</div>
        <span className="text-capital">Siren</span>
      </div>
      <div className="flex1">
        <div>
          <NavLink
            to="/home"
            style={({ isActive }) => {
              return {
                color: isActive ? "grey" : "Black",
                textDecoration: "none",
              };
            }}
          >
            {" "}
            Home{" "}
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/tollywood"
            style={({ isActive }) => {
              return {
                color: isActive ? "grey" : "Black",
                textDecoration: "none",
              };
            }}
          >
            {" "}
            Tourism{" "}
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/technology"
            style={({ isActive }) => {
              return {
                color: isActive ? "grey" : "Black",
                textDecoration: "none",
              };
            }}
          >
            {" "}
            Technology{" "}
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/jobs"
            style={({ isActive }) => {
              return {
                color: isActive ? "grey" : "Black",
                textDecoration: "none",
              };
            }}
          >
            {" "}
            Food{" "}
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/nature"
            style={({ isActive }) => {
              return {
                color: isActive ? "grey" : "Black",
                textDecoration: "none",
              };
            }}
          >
            {" "}
            Fitness{" "}
          </NavLink>
        </div>
        {/* <div>
          <NavLink
            to="/about"
            style={({ isActive }) => {
              return {
                color: isActive ? "blue" : "Black",
                textDecoration: "none",
              };
            }}
          >
            {" "}
            About Us{" "}
          </NavLink>
        </div> */}
      </div>
      <br />
      <br />
      <hr />
    </div>
  );
};

export default Header;
