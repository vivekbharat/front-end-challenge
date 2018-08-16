import React, { Component } from "react";

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
    // this.setState({ setRateFilter: true });
    // console.log(this.state.setRateFilter);
    const data = [...this.state.profileData];
    data.sort((a, b) => b.averageRating - a.averageRating);
    this.setState({ profileData: data, setRateFilter: true });
  };

  sortByPopularFilter = () => {
    // this.setState({ setPopularFilter: true });
    const data2 = [...this.state.profileData];
    data2.sort((a, b) => b.views.length - a.views.length);
    this.setState({ profileData: data2, setPopularFilter: true });
  };

  //   sort = (type) => {
  //     const data = [...this.state.profileData];
  //     if(type === 'averageRating')
  // data.sort((a,b) => b.type - a.type);

  //   }

  // componentWillUpdate(nextProps, nextState) {
  //   this.sortByRateFilter();
  // }

  // componentWillMount() {
  //   this.sortByRateFilter();
  //   // console.log("Component will mount", this.state.setRateFilter);
  // }

  // componentWillMount() {}

  render() {
    // console.log(this.state.profileData);
    const logoUrl = "https://troolr.com/assets/graphics/logo-small.png";
    const navSecondaryContents = {
      location: "location",
      categories: "categories"
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
