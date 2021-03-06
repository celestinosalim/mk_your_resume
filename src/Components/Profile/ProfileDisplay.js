import React, { Component } from "react";
import ProfileDisplayCard from "./ProfileDisplayCard";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";
import Scrollspy from "react-scrollspy";

class ProfileDisplay extends Component {
  state = {};

  getEducation = () => {
    return this.props.resume.education.map(education => (
      <EducationCard education={education} key={education} />
    ));
  };

  getExperience = () => {
    return this.props.resume.experience.map(experience => (
      <ExperienceCard experience={experience} key={experience} />
    ));
  };

  render() {
    // console.log("from profile display props", this.props);
    return (
      <div>
        <ProfileDisplayCard
          resume={this.props.resume}
          education={this.getEducation()}
          experience={this.getExperience()}
          objective={this.props.resume.objective}
          handleEditClick={this.props.handleEditClick}
          handleDeleteClick={this.props.handleDeleteClick}
        />
      </div>
    );
  }
}

export default ProfileDisplay;
