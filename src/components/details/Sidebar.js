import React from "react";

const Sidebar = () => {
  return (
    <div className="card">
      <div className="card-body" style={{ height: "75vh" }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Home</li>
          <li className="list-group-item">Welness</li>
          <li className="list-group-item">Consulting</li>
          <li className="list-group-item">Automotive</li>
          <li className="list-group-item">Events</li>
          <li className="list-group-item">Tech</li>
          <li className="list-group-item">Pets</li>
          <li className="list-group-item">Education</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
