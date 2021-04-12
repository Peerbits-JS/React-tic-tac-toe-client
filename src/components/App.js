import Result from "./Result";
import "./App.css";
import Welcome from "./Welcome";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageIndex: 1
    };
  }

  // conditionRendering
  displayPage = index => {
    switch (index) {
      case 1:
        return <Welcome getIndex={this.handleComponanet} />;
      case 0:
        return (
            <Result />
        );
      default:
    }
  };
  handleComponanet = index => {
    console.log("handleComponanet call " + index);

    this.setState({
      pageIndex: index
    });
  };

  render() {
    return <div>{this.displayPage(this.state.pageIndex)}</div>;
  }
}
