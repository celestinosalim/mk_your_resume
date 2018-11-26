import React, { Component } from "react";
import ProfileList from "../Components/Profile/ProfileList";
import ProfileDisplay from "../Components/Profile/ProfileDisplay";
import EditForm from "../Components/Form/EditForm";
//
//

class ProfileContainer extends Component {
  state = {
    selectedResume: null,
    clicked: false,
    editClick: false
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
      return (
        <ProfileDisplay
          resume={this.state.selectedResume}
          handleEditClick={this.handleEditClick}
          handleDeleteClick={this.handleDeleteClick}
        />
      );
    }
  };

  handleClick = (e, obj) => {
    this.setState({
      selectedResume: obj,
      clicked: !this.state.clicked
    });
    // console.log(obj)
  };

  handleEditClick = (e, obj) => {
    this.setState({
      selectedResume: obj,
      editClick: !this.state.editClick
    });
  };

  handleEditSubmit = (e, obj) => {
    e.preventDefault();
    // console.log(obj);
    let resumeId = this.state.selectedResume.id;
    let options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: 1,
        name: obj.name,
        objective: obj.objective,
        education: [obj.education],
        experience: [obj.experience]
      })
    };
    fetch(`http://localhost:3000/resumes/${resumeId}`, options);
  };

  handleDeleteClick = () => {
    let resumeId = this.state.selectedResume.id;

    let options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    };

    fetch(`http://localhost:3000/resumes/${resumeId}`, options);
  };

  renderEditForm = () => {
    return <EditForm handleEditSubmit={this.handleEditSubmit} />;
  };

  render() {
    // console.log(" PROPS FROM PROFILE CONTAINER LINE 41", this.props);
    // console.log(" STATE FROM PROFILE CONTAINER LINE 41", this.state);
    return (
      <div>
        {this.state.clicked === false
          ? this.getUserResumes()
          : this.getSelectedResume()}
        {this.state.editClick === true && this.renderEditForm()}
      </div>
    );
  }
}

export default ProfileContainer;
