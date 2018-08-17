import React from "react";
import Auxl from "../hoc/Auxl";
import "./Header.css";

const Header = ({ url, navbarContents: { location, categories } }) => {
  // const style = { marginLeft: "20px", marginRight: "10px" };
  return (
    <Auxl>
      <nav className="navbar1">
        <div>
          <img src={url} alt="Logo" className="logo" />
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand-sm mb-3 py-0 navbar2">
        <div>
          <ul className="navbar-nav">
            <li className="nav-item list-text">
              <i className="fas fa-globe-americas" />
              {""} {location}
            </li>

            <li className="nav-item list-text">
              <i className="fas fa-list-ul" />
              {""} {categories}
            </li>
          </ul>
        </div>
      </nav> */}
      <header>
        <nav className="navbar2">
          <li className="li-nav">
            <i className="fas fa-globe-americas" />
            {""} {location}
          </li>
          <li className="li-nav">
            <i className="fas fa-list-ul" />
            {""} {categories}
          </li>
        </nav>
      </header>
    </Auxl>
  );
};

export default Header;
