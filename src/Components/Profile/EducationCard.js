import React, { Component } from "react";

class EducationCard extends Component {
  state = {};
  render() {
    // console.log(this.props, "education");
    return (
      <div>
        <p>{this.props.education}</p>
      </div>
    );
  }
}

export default EducationCard;
