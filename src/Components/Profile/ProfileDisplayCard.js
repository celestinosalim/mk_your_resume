import React, { Component } from "react";
import "./css/display.css";

class ProfileDisplayCard extends Component {
  render() {
    console.log("FROM DISPLAYCARD", this.props);

    // return (
    //   <div>
    //     <h1> {this.props.resume.name}</h1>
    //     <h2>
    //       {this.props.education}
    //       {this.props.experience}
    //       {this.props.objective}
    //     </h2>
    //     <button
    //       onClick={e => this.props.handleEditClick(e, this.props.resume)}
    //       className="btn btn-info"
    //     >
    //       Edit
    //     </button>
    //     <button
    //       onClick={e => this.props.handleDeleteClick(e, this.props.resume)}
    //       className="btn btn-danger"
    //     >
    //       Delete
    //     </button>
    //   </div>
    // );

    return (
      <div id="Display">
        <div id="Profile">
          <h1>Profile</h1>
          <h3>{this.props.objective}</h3>
          <hr />
          <div className="row">
            <div className="col-md-4">
              <h1>About Me:</h1>
              <p>blabla</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                id="image"
                src="https://avatars1.githubusercontent.com/u/36177119?s=460&v=4"
                alt="Celestino Salim"
                width="246"
                height="246"
              />
            </div>
            <div className="col-md-4">
              <h1>Details:</h1>
              <p>Name:</p>
              <p>Age:</p>
              <p>Location:</p>
            </div>
          </div>
        </div>
        <div id="Experience">
          <div>
            <h1>Education:</h1>
            <hr />
          </div>
          <div className="row">
            <div className="col-md-4">
              <p>here is gonna be the dates</p>
            </div>

            <div className="col-md-8">{this.props.education}</div>
          </div>
          <div>
            <h1>Experiences:</h1>
            <hr />
          </div>
          <div className="row">
            <div className="col-md-4">
              <p>here is gonna be the dates</p>
            </div>

            <div className="col-md-8">{this.props.experience}</div>
          </div>
        </div>
        <div id="abilities">
          <h1>Skills</h1>
          <h2>Programming Languages and any other skill</h2>
          <h2>Javascript</h2>
          <h2>React</h2>
          <h2>Ruby</h2>
          <h2>Programming Languages List</h2>
        </div>

        <div id="tools">
          <h1>Tools</h1>
          <p>all editors, tools, frameworks those things</p>
        </div>
        <div id="projects">
          <h1>Projects</h1>
          <p>
            image with hover with a link to the working website of the project
          </p>
        </div>
        <div id="contact">
          <h1>Contact Info</h1>
          <p>footer with the information of the user.</p>
        </div>
      </div>
    );
  }
}

export default ProfileDisplayCard;
