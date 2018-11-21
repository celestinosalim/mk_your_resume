import React, { Component } from "react";
import ProfileList from "./ProfileList";

class ProfileToDisplay extends Component {
  state = {};

  getUserResumes = () => {
    return this.props.user.resume.map(resume => (
      <ProfileList resume={resume} key={resume.name} />
    ));
  };

  render() {
    // console.log(this.props);
    let resume = this.props.user.resume.map(resume => (
      <ul key={resume.id}>{resume.name}</ul>
    ));
    return (
      <div>
        <h1 onClick={() => this.getUserResumes}>{resume}</h1>
      </div>
    );
  }
}

export default ProfileToDisplay;
