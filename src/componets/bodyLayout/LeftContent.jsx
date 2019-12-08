import React, { Component, Fragment } from "react";
import axios from "axios";
import _ from "lodash";

import "../../styles/MainContent.css";
import Paper from "@material-ui/core/Paper";
import * as interval from "../../data/inverval.json";

export default class LeftContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   date: new Date()
      data: {}
    };
  }

  componentDidMount() {
    this.httpGetAsync();
  }

  httpGetAsync = () => {
    let query =
      "prefix rank:\
    <http://resource.geosciml.org/ontology/timescale/rank/>\
    prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\
    prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>\
    prefix samfl:\
    <http://def.seegrid.csiro.au/ontology/om/sam-lite#>\
    prefix sf: <http://www.opengis.net/ont/sf#>\
    prefix skos: <http://www.w3.org/2004/02/skos/core#>\
    prefix sosa: <http://www.w3.org/ns/sosa/>\
    prefix thors:\
    <http://resource.geosciml.org/ontology/timescale/thors#>\
    prefix time: <http://www.w3.org/2006/time#>\
    prefix ts:\
    <http://resource.geosciml.org/vocabulary/timescale/>\
    prefix vann: <http://purl.org/vocab/vann/>\
    prefix void: <http://rdfs.org/ns/void#>\
    prefix xkos: <http://rdf-vocabulary.ddialliance.org/xkos#>\
    prefix xsd: <http://www.w3.org/2001/XMLSchema#>\
    SELECT *\
    WHERE\
    {\
    GRAPH <http://deeptimekb.org/tschina>\
     {\
      ?s ?p ?o.\
     }\
    }";
    let url = "http://virtuoso.nkn.uidaho.edu:8890/sparql/";

    var queryUrl = url + "?query=" + encodeURIComponent(query);

    var xmlHttp = new XMLHttpRequest();
    // xmlHttp.responseType = ;
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        // xmlHttp.responseType = "json";
        console.log(xmlHttp.response);
        // this.setState({});
      }
    };
    xmlHttp.open("GET", queryUrl, true);
    xmlHttp.send(null);
  };

  render() {
    return (
      <Fragment>
        <Paper className="paperL">Left Side</Paper>

        {/* {_.map(interval.default, record => (
          <button
            style={{
              textAlign: "center",
              width: "100%"
            }}
            key={record.id}
            onClick={() => {
              this.props.setMainData(record);
            }}
          >
            {record.title}
          </button>
        ))} */}
      </Fragment>
    );
  }
}
