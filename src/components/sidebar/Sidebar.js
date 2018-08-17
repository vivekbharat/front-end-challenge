import React from "react";

import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidepane-container">
      <div id="sidepane">
        <ul>
          <li id="sidepane-item">Home</li>
          <li id="sidepane-item">Welness</li>
          <li id="sidepane-item">Consulting</li>
          <li id="sidepane-item">Automotive</li>
          <li id="sidepane-item">Events</li>
          <li id="sidepane-item">Tech</li>
          <li id="sidepane-item">Pets</li>
          <li id="sidepane-item">Education</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
