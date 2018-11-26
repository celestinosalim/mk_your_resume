import React, { Component } from "react";
import ProfileCard from "./ProfileCard";

class ProfileList extends Component {
  render() {
    // console.log(this.props);

    return (
      <div>
        <ProfileCard
          resumes={this.props.resumes}
          handleClick={this.props.handleClick}
        />
      </div>
    );
  }
}

export default ProfileList;
