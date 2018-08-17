import React, { Component } from "react";
import Detail from "./Detail";
import Sidebar from "../sidebar/Sidebar";

import "./Details.css";

class Details extends Component {
  render() {
    return (
      <div className="cont">
        <div className="row">
          <div className="container-box">
            <div className="col-lg-9 col-md-8 col-sm-9">
              <Detail profile={this.props.datas} />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-3">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
