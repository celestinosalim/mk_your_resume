import React, { Component } from "react";
import UserCard from "./UserCard";
class Login extends Component {
  render() {
    let specificUser = this.props.user.map(user => (
      <UserCard
        key={user.name}
        user={user}
        toggleState={this.props.toggleState}
      />
    ));

    return <div>{specificUser}</div>;
  }
}

export default Login;
