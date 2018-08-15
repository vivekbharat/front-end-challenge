import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        width: "300px"
      }}
    >
      <div id="sidepane">
        <ul>
          <li>Home</li>
          <li>Welness</li>
          <li>Consulting</li>
          <li>Automotive</li>
          <li>Events</li>
          <li>Tech</li>
          <li>Pets</li>
          <li>Education</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
