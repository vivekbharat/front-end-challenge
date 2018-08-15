import React, { Component } from "react";
import Detail from "./Detail";

class Details extends Component {
  render() {
    // const { datas } = this.props.datas;

    return (
      <div className="container">
        <Detail profile={this.props.datas} />
      </div>
    );
  }
}

export default Details;
