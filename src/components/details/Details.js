import React, { Component } from "react";
import Detail from "./Detail";
import Sidebar from "./Sidebar";

class Details extends Component {
  render() {
    // const { datas } = this.props.datas;

    return (
      <div className="row" style={{ padding: "20px 20px" }}>
        <div className="col-md-8 col-sm-6">
          <Detail profile={this.props.datas} />
        </div>
        <div className="col-md-4 col-sm-6">
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default Details;
