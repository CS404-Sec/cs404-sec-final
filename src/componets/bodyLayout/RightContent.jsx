import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export default class RightContent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="stretch"
        >
          <Paper className="paperL">top right</Paper>
          <Paper className="paperL">bottom right</Paper>
          {this.props.data ? <div>{this.props.data.nam}</div> : null}
        </Grid>
      </Fragment>
    );
  }
}
