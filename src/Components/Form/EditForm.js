import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

class EditForm extends Component {
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
    console.log(this.props, "edit form");
    return (
      <form onSubmit={e => this.props.handleEditSubmit(e, this.state)}>
        <FormGroup>
          <ControlLabel>
            Resume Name:
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
        <Button className="btn btn-primary" type="submit">
          Submit
        </Button>
      </form>
    );
  }
}

export default EditForm;
