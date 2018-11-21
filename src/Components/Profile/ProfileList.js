import React, { Component } from "react";
import ProfileCard from "./ProfileCard";

class ProfileList extends Component {
  render() {
    return (
      <div>
        <ProfileCard
          resume={this.props.resume}
          handleClick={this.props.handleClick}
        />
      </div>
    );
  }
}

export default ProfileList;
