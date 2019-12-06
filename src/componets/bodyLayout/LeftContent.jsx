import React, { Component, Fragment } from "react";
import axios from "axios";

import "../../styles/MainContent.css";
import Paper from "@material-ui/core/Paper";

export default class LeftContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   date: new Date()
      data: {}
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      console.log(res);
      this.setState({ data: res });
    });
  }

  render() {
    return (
      <Fragment>
        <Paper className="paperL">Left Side</Paper>
      </Fragment>
    );
  }
}
