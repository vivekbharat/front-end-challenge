import React from "react";
import Auxl from "../hoc/Auxl";
import "../styles/Header.css";

const Header = ({ url, navbarContents: { location, categories } }) => {
  // const style = { marginLeft: "20px", marginRight: "10px" };
  return (
    <Auxl>
      <nav className="navbar1">
        <div>
          <img src={url} alt="Logo" className="logo" />
        </div>
      </nav>
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
