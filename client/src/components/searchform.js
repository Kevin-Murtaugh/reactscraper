import React, { Component } from "react";
import {
  Checkbox,
  Radio,
  ControlLabel,
  FormGroup,
  FormControl,
  Button,
  HelpBlock
} from "react-bootstrap";

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default class Searchform extends Component {
  render() {
    return (
      <div>
        <form>
          <FieldGroup id="formControlsText" type="text" label="Search Term" />
          <FieldGroup
            id="formControlsText"
            type="text"
            label="Number of Records to Retrieve"
          />
          <FieldGroup
            id="formControlsText"
            type="text"
            label="Start Year(Optional)"
          />
          <FieldGroup
            id="formControlsText"
            type="text"
            label="End Year(Optional)"
          />

          <Button type="submit">Search</Button>
          <Button type="submit">Clear Results</Button>
        </form>
      </div>
    );
  }
}
