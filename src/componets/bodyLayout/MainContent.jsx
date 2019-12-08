import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";

import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

import "../../styles/MainContent.css";

export default class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    this.setMainData = this.setMainData.bind(this);
  }

  setMainData(newData) {
    console.log(newData);
    this.setState({ data: newData });
  }

  render() {
    return (
      <Fragment>
        <div id="topRight"></div>
        <div id="BottomRight"></div>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <LeftContent setMainData={this.setMainData}></LeftContent>
          </Grid>
          <Grid item xs={12} sm={6}>
            <RightContent data={this.state.data}></RightContent>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}
