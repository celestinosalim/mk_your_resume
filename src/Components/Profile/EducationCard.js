import React, { Component } from "react";

class EducationCard extends Component {
  state = {};
  render() {
    // console.log(this.props, "education");
    return (
      <div>
        <h3>{this.props.education}</h3>
      </div>
    );
  }
}

export default EducationCard;
