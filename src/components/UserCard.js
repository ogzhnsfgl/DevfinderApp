import React from "react";

const UserCard = () => {
  return (
    <div className="card-container">
      <div className="image-area">
        <img
          src="https://avatars.githubusercontent.com/u/85337758?v=4"
          alt=""
        />
      </div>
      <div className="user-info">
        <div className="row first-row">
          <div>
            <p className="font-bg">Oguzhan</p>
            <p className="nick">@ogzhnsfgl</p>
          </div>
          <p className="text-passive">Joined 20 January 2020</p>
        </div>
        <div className="row second-row">
          <p className="text-passive">Lorem ipsum dolor sit.</p>
        </div>
        <div className="row detail-area">
          <div>
            <p className="text-passive">Repos</p>
            <p className="font-bg">8</p>
          </div>
          <div>
            <p className="text-passive">Followers</p>
            <p className="font-bg">18</p>
          </div>
          <div>
            <p className="text-passive">Following</p>
            <p className="font-bg">33</p>
          </div>
        </div>
        <div className="row last-row">
          <p>
            <i class="fas fa-map-marker-alt"></i>İstanbul, Turkey
          </p>
          <p>
            <i class="fab fa-twitter"></i>@ogzhnn_
          </p>
          <p>
            <i class="fas fa-link"></i>
            https://www.linkedin.com/in/oguzhan-sofuoglu/
          </p>
          <p className="text-passive">
            <i class="fas fa-building"></i> Not Available
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
