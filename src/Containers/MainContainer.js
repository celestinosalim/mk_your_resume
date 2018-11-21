import React, { Component, Fragment } from "react";
import NavBar from "../Components/NavBar/NavBar";
import ProfileContainer from "./ProfileContainer";
// import Footer from "../Components/Footer/Footer";
import Form from "../Components/Form/ResumeForm";
import Contact from "../Components/Contact/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";

class MainContainer extends Component {
  getUserResume = () => {
    return this.props.user.map(user => (
      <ProfileContainer user={user} key={user.name} />
    ));
  };

  getUserContact = () => {
    return this.props.user.map(user => (
      <Contact contact={user.contact} key={user.name} />
    ));
  };

  render() {
    // console.log(this.props);
    return (
      <Router>
        <Fragment>
          <NavBar />
          <Route exact path="/resume" render={() => this.getUserResume()} />
          <Route exact path="/contact" render={() => this.getUserContact()} />
          <Route exact path="/new" render={() => <Form />} />
          {/* <Footer /> */}
        </Fragment>
      </Router>
    );
  }
}

export default MainContainer;
