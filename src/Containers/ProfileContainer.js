import React, { Component } from "react";
import ProfileList from "../Components/Profile/ProfileList";
import ProfileDisplay from "../Components/Profile/ProfileDisplay";

class ProfileContainer extends Component {
  state = {
    resume: this.props.user.resume,
    selectedResume: null,
    clicked: false
  };

  getUserResumes = () => {
    return this.state.resume.map(resume => (
      <ProfileList
        resume={resume}
        key={resume.name}
        handleClick={this.handleClick}
      />
    ));
  };

  getSelectedResume = () => {
    if (this.state.selectedResume) {
      return (
        <ProfileDisplay
          resume={this.state.selectedResume}
          key={this.state.selectedResume.name}
        />
      );
    }
  };

  handleClick = (e, obj) => {
    this.setState({
      selectedResume: obj,
      clicked: !this.state.clicked
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.clicked === false
          ? this.getUserResumes()
          : this.getSelectedResume()}
      </div>
    );
  }
}

export default ProfileContainer;
