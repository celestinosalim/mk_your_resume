import React, { Component } from "react";

class UserCard extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <h1 onClick={e => this.props.toggleState(e, this.props.user)}>
          Welcome: {this.props.user.name}
        </h1>
      </div>
    );
  }
}

export default UserCard;
