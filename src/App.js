import React, { Component } from "react";

import Header from "./components/Header";
import Filter from "./components/Filter";
import Details from "./components/details/Details";

import $ from "jquery";

import data from "./profileData.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: data
    };
  }

  // getProfileData() {
  //   $.ajax({
  //     url: "../public/profileData.json",
  //     dataType: "json",
  //     cache: false,
  //     success: function(data) {
  //       this.setState({ profileData: data });
  //     }.bind(this),
  //     error: function(xhr, status, err) {
  //       console.log(err);
  //       // alert(err);
  //     }
  //   });
  // }

  // componentDidMount() {
  //   this.getProfileData();
  //   // fetch("../public/profileData.json")
  //   //   .then(response => response.json())
  //   //   .then(data => this.setState({ profileData: data }))
  //   //   .catch(err => console.log(err));
  // }

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
