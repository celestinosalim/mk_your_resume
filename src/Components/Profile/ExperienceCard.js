import React, { Component } from "react";

class ExperienceCard extends Component {
  state = {};
  render() {
    return (
      <div>
        <ul className="exp">{this.props.experience}</ul>
      </div>
    );
  }
}

export default ExperienceCard;
