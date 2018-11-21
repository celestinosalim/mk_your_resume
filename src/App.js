import React, { Component } from "react";
import MainContainer from "./Containers/MainContainer";
// import Login from "./Components/Login/Login";

class App extends Component {
  state = {
    // login: false,
    users: [],
    resumes: []
  };

  // toggleState = (e, obj) => {
  //   e.preventDefault();
  //   this.setState({
  //     login: !this.state.login,
  //     user: obj
  //   });
  // };

  getUser = () => {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(data => this.setState({ users: data }));
  };

  getResumes = () => {
    fetch("http://localhost:3000/resumes")
      .then(res => res.json())
      .then(data => this.setState({ resumes: data }));
  };

  componentDidMount() {
    this.getUser();
    this.getResumes();
  }

  renderApp = () => {
    return (
      <MainContainer users={this.state.users} resumes={this.state.resumes} />
    );

    // return <Login toggleState={this.toggleState} user={this.state.user} />;
  };

  render() {
    // console.log(this.state);
    return <div>{this.renderApp()}</div>;
  }
}

export default App;
