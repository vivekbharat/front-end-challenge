import React, { Component } from "react";
import Detail from "./Detail";
import Sidebar from "../sidebar/Sidebar";

class Details extends Component {
  render() {
    return (
      <div
        style={{
          marginTop: "30px",
          width: "98.5vw",
          backgroundColor: "#F1F1F1"
        }}
      >
        <div className="row">
          <div className="col-lg-9 col-md-8 col-sm-6">
            <Detail profile={this.props.datas} />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
