import React, { Component } from "react";
import "../../css/Contact.css";
import linkedIn from "../../css/images/linkedin.png";
import Instagram from "../../css/images/instagram.png";
import Facebook from "../../css/images/facebook.png";
import Google from "../../css/images/google.png";
import GitHub from "../../css/images/GitHub.png";
import Message from "../../css/images/message.png";
import { ListGroup, ListGroupItem } from "react-bootstrap";

class Contact extends Component {
  render() {
    let { contact, name } = this.props;

    // console.log(contact);
    return (
      <div id="container">
        <div className="Contact">
          <h1>{name}</h1>
        </div>
        <div className="social-icons">
          <ListGroup>
            <ListGroupItem
              href={`iMessage://${contact.phone}`}
              data-rel="external"
            >
              <img src={Message} alt="" />
            </ListGroupItem>
            <ListGroupItem href="https://www.linkedin.com/in/celestinosalim/">
              <img src={linkedIn} alt="" />
            </ListGroupItem>
            <ListGroupItem href="https://www.instagram.com/alexsalim1/">
              <img src={Instagram} alt="" />
            </ListGroupItem>
            <ListGroupItem href="https://www.facebook.com/">
              <img src={Facebook} alt="" />
            </ListGroupItem>
            <ListGroupItem href={`mailto:${contact.email}`}>
              <img src={Google} alt="" />
            </ListGroupItem>
            <ListGroupItem href="http://github.com/celestinosalim">
              <img src={GitHub} alt="" />
            </ListGroupItem>
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default Contact;
