import React, { Component } from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Form,
  Button
} from "react-bootstrap";

class ResumeForm extends Component {
  state = {
    name: "",
    objective: "",
    education: "",
    experience: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={e => this.props.toggleState(e, this.state)}>
        <FormGroup>
          <ControlLabel>
            Name:
            <FormControl
              type="text"
              value={this.state.name}
              name="name"
              placeholder="Enter name..."
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
          </ControlLabel>
        </FormGroup>
        <FormGroup>
          <ControlLabel>
            Objective:
            <FormControl
              type="text"
              value={this.state.objective}
              placeholder="Enter objective..."
              onChange={this.handleChange}
              name="objective"
            />
            <FormControl.Feedback />
          </ControlLabel>
        </FormGroup>
        <FormGroup>
          <ControlLabel>
            Education:
            <FormControl
              type="text"
              componentClass="textarea"
              value={this.state.education}
              placeholder="Enter education..."
              onChange={this.handleChange}
              name="education"
            />
            <FormControl.Feedback />
          </ControlLabel>
        </FormGroup>
        <FormGroup>
          <ControlLabel>
            Experience:
            <FormControl
              type="text"
              componentClass="textarea"
              value={this.state.experience}
              placeholder="Enter experience..."
              onChange={this.handleChange}
              name="experience"
            />
            <FormControl.Feedback />
          </ControlLabel>
        </FormGroup>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default ResumeForm;
