import React, { Component } from "react";

import "./Filter.css";

class Filter extends Component {
  constructor() {
    super();

    this.state = {
      showItems: false
    };
  }

  showMenu = e => {
    e.preventDefault();
    this.setState({ showItems: !this.state.showItems });
  };

  setPopularFilter = () => {
    this.props.sortByPopular();
  };

  setRateFilter = () => {
    this.props.sortByRate();
  };

  render() {
    const style = { marginLeft: "40px", fontSize: "1rem" };

    return (
      <div style={style}>
        <div>
          <label>
            Newest contractors in {this.props.location.city}
            {", "}
            {this.props.location.state},{" "}
            <span style={{ color: "orange" }}>
              ({this.props.count} Results)
            </span>{" "}
          </label>

          {/* <br /> */}
          <div className="dropdown">
            <button className="dropdown-button" onClick={this.showMenu}>
              Sort By
            </button>

            {this.state.showItems ? (
              <div className="dropdown-content">
                <ul className="list-group list-group-flush">
                  <a onClick={this.setRateFilter}>
                    {" "}
                    <li className="list-group-item">Top Rated</li>
                  </a>
                  <a onClick={this.setPopularFilter}>
                    <li className="list-group-item">Most Popular</li>
                  </a>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
