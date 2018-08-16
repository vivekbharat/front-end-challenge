import React from "react";
import Auxl from "../hoc/Auxl";

const Header = ({ url, navbarContents }) => {
  // const style = { marginLeft: "20px", marginRight: "10px" };
  return (
    <Auxl>
      <nav className="navbar navbar-expand-sm navbar-dark bg-light mb-3 py-0">
        <div>
          <img
            src={url}
            alt="Logo"
            style={{
              width: "10vw",
              height: "4vw",
              paddingTop: "0.5vw"
              // paddingBottom: "0.4vw"
            }}
          />
        </div>
      </nav>
      <nav
        className="navbar navbar-expand-sm mb-3 py-0"
        style={{ backgroundColor: "#5CB85C", height: "5vw", color: "white" }}
      >
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item" style={{ padding: "1vw" }}>
              <i className="fas fa-globe-americas" />
              {""} {navbarContents.location}
            </li>

            <li className="nav-item" style={{ padding: "1vw" }}>
              <i className="fas fa-list-ul" />
              {""} {navbarContents.categories}
            </li>
          </ul>
        </div>
      </nav>
    </Auxl>
  );
};

export default Header;
