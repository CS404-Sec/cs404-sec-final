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
          <Paper
            style={{ fontWeight: "bold", textAlign: "center" }}
            className="paperL"
          >
            English Comment of the Time Period
          </Paper>
          {this.props.data ? (
            <Paper style={{ textAlign: "center", padding: "10px" }}>
              {this.props.data}
            </Paper>
          ) : null}
        </Grid>
      </Fragment>
    );
  }
}
