import React, { Component } from "react";

import Header from "./components/Header";
import Filter from "./components/Filter";
import Details from "./components/details/Details";

import data from "./profileData.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: data
    };
  }

  render() {
    console.log(this.state.profileData);
    return (
      <div className="App">
        <Header />
        <Filter location="Santa Clara, Ca" count="16" />
        <Details datas={this.state.profileData} />
      </div>
    );
  }
}

export default App;
