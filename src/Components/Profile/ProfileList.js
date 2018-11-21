import React, { Component } from "react";
import ProfileCard from "./ProfileCard";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";

class ProfileList extends Component {
  state = {
    selectedResume: null
  };

  handleClick = (e, obj) => {
    this.setState({
      selectedResume: obj
    });
  };

  getEducation = () => {
    if (this.state.selectedResume) {
      return this.state.selectedResume.education.map(education => (
        <EducationCard education={education} key={education} />
      ));
    }
  };

  getExperience = () => {
    if (this.state.selectedResume) {
      return this.state.selectedResume.experience.map(experience => (
        <ExperienceCard experience={experience} key={experience} />
      ));
    }
  };

  toProfileCard = () => {
    return (
      <ProfileCard
        education={this.getEducation()}
        experience={this.getExperience()}
      />
    );
  };

  render() {
    console.log("from list", this.state);
    return (
      <div>
        {/* <ProfileCard
          education={this.getEducation()}
          experience={this.getExperience()}
        /> */}
        <h1 onClick={e => this.handleClick(e, this.props.resume)}>
          {this.props.resume.name}
        </h1>
        {this.state.selectedResume && this.toProfileCard()}
      </div>
    );
  }
}

export default ProfileList;
