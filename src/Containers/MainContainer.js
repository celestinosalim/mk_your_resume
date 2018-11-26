import React, { Component, Fragment } from "react";
import NavBar from "../Components/NavBar/NavBar";
import ProfileContainer from "./ProfileContainer";
// import Footer from "../Components/Footer/Footer";
import ResumeForm from "../Components/Form/ResumeForm";
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

class MainContainer extends Component {
  //
  //
  getUserResume = () => {
    return (
      <ProfileContainer
        handleEditSubmit={this.handleEditSubmit}
        resumes={this.props.resumes}
        handleEditClick={this.handleEditClick}
      />
    );
  };

  getUserContact = () => {
    return this.props.users.map(user => (
      <Contact contact={user.contact} name={user.name} key={user.id} />
    ));
  };

  handleFormSubmit = (e, obj) => {
    e.preventDefault();
    // console.log(obj);
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: 1,
        name: obj.name,
        objective: obj.objective,
        education: [obj.education],
        experience: [obj.experience]
      })
    };

    fetch(`http://localhost:3000/resumes`, options);
  };

  render() {
    // console.log("FROM MAIN CONTAINER LINE 42", this.props);
    return (
      <Router>
        <Fragment>
          <NavBar />
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/resume" render={() => this.getUserResume()} />
          <Route exact path="/contact" render={() => this.getUserContact()} />
          <Route
            exact
            path="/new"
            render={() => (
              <ResumeForm handleFormSubmit={this.handleFormSubmit} />
            )}
          />

          {/* <Footer /> */}
        </Fragment>
      </Router>
    );
  }
}

export default MainContainer;
