import React, { Component } from "react";

import "../styles/Filter.css";

class Filter extends Component {
  constructor() {
    super();

    this.state = {
      showItems: false,
      sortBy: ""
    };
  }

  showMenu = e => {
    e.preventDefault();
    this.setState({ showItems: !this.state.showItems });
  };

  setPopularFilter = () => {
    this.props.sortByPopular();
    this.setState({ sortBy: "Most Popular" });
  };

  setRateFilter = () => {
    this.props.sortByRate();
    this.setState({ sortBy: "Top Rated" });
  };

  render() {
    const style = { marginLeft: "40px", fontSize: "1rem" };

    const {
      location: { city, state },
      count
    } = this.props;

    let sortName = "";
    const { sortBy } = this.state;
    if (sortBy === "Top Rated") {
      sortName = "(Top Rated)";
    } else if (sortBy === "Most Popular") {
      sortName = "(Most Popular)";
    }

    return (
      <div style={style}>
        <div>
          <label>
            Newest contractors in {city}
            {", "}
            {state}, <span style={{ color: "orange" }}>({count} Results)</span>{" "}
          </label>

          <div className="dropdown">
            <button className="dropdown-button" onClick={this.showMenu}>
              Sort By {sortName === "" ? null : sortName}
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
