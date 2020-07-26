import React, { Component } from "react";

class UserProfile extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <h1 className="profile-h1">My profile</h1>
        </div>
        <img
          className="profile-pic"
          src={require("../assets/jeff2-copy.jpeg")}
        />
        <h2 className="username">SunShineOnex</h2>

        <div class="card-deck">
          <div class="row">
            <div class="col-lg-4">
              <div id="card" class="card">
                <img
                  class="card-img-top img-fluid"
                  src={require("../assets/coffee.jpg")}
                  className="card-img-top frag"
                  alt=""
                ></img>
              </div>
            </div>
            <div class="col-lg-4">
              <div id="card" class="card">
                <img
                  class="card-img-top img-fluid"
                  src={require("../assets/city.jpg")}
                  className="card-img-top frag"
                  alt=""
                ></img>
              </div>
            </div>
            <div class="col-lg-4">
              <div id="card" class="card">
                <img
                  class="card-img-top img-fluid"
                  src={require("../assets/laptop.jpeg")}
                  className="card-img-top frag"
                  alt=""
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
