import React, { Component } from "react";

import "./styles/App.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Details from "./components/details/Details";

import data from "./profileData.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: data,
      setRateFilter: false,
      setPopularFilter: false
    };
  }

  sortByRateFilter = () => {
    const data = [...this.state.profileData];
    data.sort((a, b) => b.averageRating - a.averageRating);
    this.setState({ profileData: data, setRateFilter: true });
  };

  sortByPopularFilter = () => {
    const data2 = [...this.state.profileData];
    data2.sort((a, b) => b.views.length - a.views.length);
    this.setState({ profileData: data2, setPopularFilter: true });
  };

  render() {
    const logoUrl = "https://troolr.com/assets/graphics/logo-small.png";
    const navSecondaryContents = {
      location: "Locations",
      categories: "Categories"
    };
    return (
      <div className="App">
        <Header url={logoUrl} navbarContents={navSecondaryContents} />
        <Filter
          location={this.state.profileData[0].address}
          count={this.state.profileData.length}
          sortByRate={this.sortByRateFilter}
          sortByPopular={this.sortByPopularFilter}
          sort={this.sort}
        />
        {this.state.setRateFilter || this.state.setPopularFilter ? (
          <Details datas={this.state.profileData} />
        ) : (
          <Details datas={this.state.profileData} />
        )}
      </div>
    );
  }
}

export default App;
