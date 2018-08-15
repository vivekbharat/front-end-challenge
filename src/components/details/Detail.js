import React from "react";
import Rating from "react-rating";

import "./Detail.css";

const Detail = props => {
  const { profile } = props;

  return (
    <div className="container" id="box">
      {profile.map(data => (
        <div className="profile" key={data.url}>
          {<img src={data.profile_picture} alt="" className="profile-image" />}
          <strong className="text title">{data.title}</strong>
          <span className="text name" style={{ display: "block" }}>
            {data.name}
          </span>
          <br />
          <span className="text location">
            {data.address.city}
            {", "}
            {data.address.state}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Detail;
