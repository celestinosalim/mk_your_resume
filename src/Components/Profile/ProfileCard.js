import React, { Component } from "react";

class ProfileCard extends Component {
  state = {};

  render() {
    // console.log(this.props);
    return (
      <div>
        <h1 onClick={e => this.props.handleClick(e, this.props.resume)}>
          {this.props.resume.name}
        </h1>
      </div>
    );
  }
}

export default ProfileCard;
