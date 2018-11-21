import React, { Component } from "react";

class ProfileCard extends Component {
  state = {};

  render() {
    // console.log(this.props);
    return (
      <div>
        <h1>Education:</h1>
        <h2>{this.props.education}</h2>
        <br />
        <h1>Experience:</h1>
        <h2>{this.props.experience}</h2>
        <br />
      </div>
    );
  }
}

export default ProfileCard;
