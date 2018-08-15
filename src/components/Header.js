import React from "react";
import Auxl from "../hoc/Auxl";

const Header = () => {
  return (
    <Auxl>
      <nav className="navbar navbar-expand-sm navbar-dark bg-light mb-3 py-0">
        <div className="container">
          <img
            src="https://troolr.com/assets/graphics/logo-small.png"
            alt="Logo"
            className="navbar-brand"
            style={{
              width: "150px",
              height: "50px",
              paddingTop: "3px",
              paddingBottom: "3px"
            }}
          />
        </div>
      </nav>
      <nav
        className="navbar navbar-expand-sm mb-3 py-0"
        style={{ backgroundColor: "#5CB85C", height: "50px", color: "white" }}
      >
        <div className="container">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item" style={{ padding: "15px 5px" }}>
              <i className="fas fa-globe-americas" />
              {""} Location
            </li>

            <li className="nav-item" style={{ padding: "15px 5px" }}>
              <i className="fas fa-list-ul" />
              {""} Categories
            </li>
          </ul>
        </div>
      </nav>
    </Auxl>
  );
};

export default Header;
