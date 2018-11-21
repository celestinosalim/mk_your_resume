import React, { Component } from "react";
import MainContainer from "./Containers/MainContainer";
// import Login from "./Components/Login/Login";

class App extends Component {
  state = {
    login: false,
    user: []
  };

  toggleState = (e, obj) => {
    e.preventDefault();
    this.setState({
      login: !this.state.login,
      user: obj
    });
  };

  getUser = () => {
    fetch("http://localhost:3000/user")
      .then(res => res.json())
      .then(data => this.setState({ user: data }));
  };

  componentDidMount() {
    this.getUser();
  }

  renderApp = () => {
    return <MainContainer user={this.state.user} />;

    // return <Login toggleState={this.toggleState} user={this.state.user} />;
  };

  render() {
    // console.log(this.state);
    return <div>{this.renderApp()}</div>;
  }
}

export default App;
