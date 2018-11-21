import React, { Component } from "react";

class ProfileDisplayCard extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1> {this.props.resume.name}</h1>
        <h2>
          {this.props.education}
          {this.props.experience}
        </h2>
      </div>
    );
  }
}

export default ProfileDisplayCard;
