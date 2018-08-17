import React from "react";
import Rating from "react-rating";
import starGrey from "../../images/star-grey.png";
import starYellow from "../../images/star-yellow.png";

import "../../styles/Detail.css";

const Detail = props => {
  const { profile } = props;

  if (profile) {
    return (
      <div className="detail-container">
        <div id="box">
          {profile.map(data => (
            <div className="profile" key={data.url}>
              {
                <img
                  src={data.profile_picture}
                  alt=""
                  className="profile-image"
                />
              }
              <strong className="text title">{data.title}</strong>
              <span className="text name">{data.name}</span>

              <span className="text location">
                {data.address.city}
                {", "}
                {data.address.state}
              </span>
              <div className="rating-profile">
                <Rating
                  emptySymbol={
                    <img src={starGrey} className="icon" alt="star-grey" />
                  }
                  fullSymbol={
                    <img src={starYellow} className="icon" alt="star-yellow" />
                  }
                  initialRating={data.averageRating}
                  readonly
                  className="rating"
                />

                <button className="btn">View Profile</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
};

export default Detail;
