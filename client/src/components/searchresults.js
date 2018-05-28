import React, { Component } from "react";
import { Panel, Well } from "react-bootstrap";

export default class Searchresults extends Component {
  render() {
    return (
      <Panel bsStyle="primary">
        <Panel.Heading>
          <Panel.Title componentClass="h3">Top Articles</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Well>Look I'm in a well!</Well>
          <Well>Look I'm in a well!</Well>
          <Well>Look I'm in a well!</Well>
          <Well>Look I'm in a well!</Well>
        </Panel.Body>
      </Panel>
    );
  }
}
