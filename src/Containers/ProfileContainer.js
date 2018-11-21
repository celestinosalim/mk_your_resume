import React, { Component } from "react";
import ProfileList from "../Components/Profile/ProfileList";

class ProfileContainer extends Component {
  state = {};

  getUserResumes = () => {
    return this.props.user.resume.map(resume => (
      <ProfileList resume={resume} key={resume.name} />
    ));
  };

  // getJustResumes = () => {
  //   return this.props.user.resume.map(resume => (
  //     <ul key={resume.id}>{resume.name}</ul>
  //   ));
  // };

  // handleResumeDisplay = e => {
  //   console.log(e.target);
  // };

  render() {
    // console.log(this.props);
    return (
      <div>
        {/* <h1 onClick={e => this.handleResumeDisplay(e)}> */}
        {/* {this.getJustResumes()} */}
        {this.getUserResumes()}
        {/* </h1> */}
      </div>
    );
  }
}

export default ProfileContainer;
