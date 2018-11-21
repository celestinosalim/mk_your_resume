import React, { Component } from "react";

class ProfileDisplayCard extends Component {
  state = {};
  render() {
    console.log("FROM DISPLAYCARD", this.props);

    return (
      <div>
        <h1> {this.props.resume.name}</h1>
        <h2>
          {this.props.education}
          {this.props.experience}
          {this.props.objective}
        </h2>
      </div>
    );
  }
}

export default ProfileDisplayCard;
