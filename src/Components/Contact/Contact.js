import React, { Component } from "react";

class Contact extends Component {
  state = {};

  render() {
    let { contact } = this.props;
    console.log(contact);
    return (
      <div>
        <h1>{contact.email}</h1>
        <h2>{contact.phone}</h2>
      </div>
    );
  }
}

export default Contact;
