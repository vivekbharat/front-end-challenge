import React from "react";
import Auxl from "../hoc/Auxl";

const Header = () => {
  const style = { marginLeft: "20px", marginRight: "10px" };
  return (
    <Auxl>
      <nav className="navbar navbar-expand-sm navbar-dark bg-light mb-3 py-0">
        <div style={style}>
          <img
            src="https://troolr.com/assets/graphics/logo-small.png"
            alt="Logo"
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
        <div style={style}>
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
