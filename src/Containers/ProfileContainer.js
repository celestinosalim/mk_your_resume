import React, { Component } from "react";
import ProfileList from "../Components/Profile/ProfileList";
import ProfileDisplay from "../Components/Profile/ProfileDisplay";

class ProfileContainer extends Component {
  state = {
    selectedResume: null,
    clicked: false
  };

  getUserResumes = () => {
    let resume = this.props.resumes.map(resumes => (
      <ProfileList
        resumes={resumes}
        key={resumes.id}
        handleClick={this.handleClick}
      />
    ));
    return resume;
  };

  getSelectedResume = () => {
    if (this.state.selectedResume) {
      console.log("nop");
      return <ProfileDisplay resume={this.state.selectedResume} />;
    }
  };

  handleClick = (e, obj) => {
    this.setState({
      selectedResume: obj,
      clicked: !this.state.clicked
    });
  };

  render() {
    // console.log(" PROPS FROM PROFILE CONTAINER LINE 41", this.props);
    // console.log(" STATE FROM PROFILE CONTAINER LINE 41", this.state);
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
