import React, { Component, Fragment } from "react";
import axios from "axios";
import _ from "lodash";

import "../../styles/MainContent.css";
import Paper from "@material-ui/core/Paper";
import { compose } from "@material-ui/system";

export default class LeftContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      periodList: [
        { title: "Penglaizhenian", periodName: "Phanerozoic" },
        { title: "Suiningian", periodName: "Phanerozoic" },
        { title: "Shaximioan", periodName: "Phanerozoic" },
        { title: "Xintiangouan", periodName: "Phanerozoic" },
        { title: "Ziliujingian", periodName: "Phanerozoic" },
        { title: "Erqiaoan", periodName: "Phanerozoic" },
        { title: "Huobachengian", periodName: "Phanerozoic" },
        { title: "Bananian", periodName: "Phanerozoic" },
        { title: "Falangian", periodName: "Phanerozoic" },
        { title: "Guanlingian", periodName: "Phanerozoic" },
        { title: "Yongningzhenian", periodName: "Phanerozoic" },
        { title: "Feixianguanian", periodName: "Phanerozoic" },
        { title: "Meishanian", periodName: "Phanerozoic" },
        { title: "Baoqingian", periodName: "Phanerozoic" },
        { title: "Laoshanian", periodName: "Phanerozoic" },
        { title: "Laibinian", periodName: "Phanerozoic" },
        { title: "Lengwuan", periodName: "Phanerozoic" },
        { title: "Kuhfengian", periodName: "Phanerozoic" },
        { title: "Xiangboan", periodName: "Phanerozoic" },
        { title: "Luodianian", periodName: "Phanerozoic" },
        { title: "Longlinian", periodName: "Phanerozoic" },
        { title: "Zisongian", periodName: "Phanerozoic" },
        { title: "Xiaodushanian", periodName: "Phanerozoic" },
        { title: "Dalaan", periodName: "Phanerozoic" },
        { title: "Huashibanian", periodName: "Phanerozoic" },
        { title: "Lousuan", periodName: "Phanerozoic" },
        { title: "Dewuan", periodName: "Phanerozoic" },
        { title: "Shangsian", periodName: "Phanerozoic" },
        { title: "Jiusian", periodName: "Phanerozoic" },
        { title: "Tangbagouan", periodName: "Phanerozoic" },
        { title: "Gelaohean", periodName: "Phanerozoic" },
        { title: "Xikuangshanian", periodName: "Phanerozoic" },
        { title: "Shetianqiaoan", periodName: "Phanerozoic" },
        { title: "Dongganglingian", periodName: "Phanerozoic" },
        { title: "Yingtangian", periodName: "Phanerozoic" },
        { title: "Sipaian", periodName: "Phanerozoic" },
        { title: "Yujianian", periodName: "Phanerozoic" },
        { title: "Nagaolingian", periodName: "Phanerozoic" },
        { title: "Lianhuashanian", periodName: "Phanerozoic" },
        { title: "Yulongsian", periodName: "Phanerozoic" },
        { title: "Miaogoalingian", periodName: "Phanerozoic" },
        { title: "Guandian", periodName: "Phanerozoic" },
        { title: "Xiushanian", periodName: "Phanerozoic" },
        { title: "Baishaean", periodName: "Phanerozoic" },
        { title: "Shinulanian", periodName: "Phanerozoic" },
        { title: "Longmaxian", periodName: "Phanerozoic" },
        {
          title: "Chientangkiangian",

          periodName: "Phanerozoic"
        },
        {
          title: "Neichianshanian",

          periodName: "Phanerozoic"
        },
        {
          title: "Darriwilian",

          periodName: "Phanerozoic"
        },
        {
          title: "Dawanian",

          periodName: "Phanerozoic"
        },
        {
          title: "Yushanian",

          periodName: "Phanerozoic"
        },
        {
          title: "Ichangian",

          periodName: "Phanerozoic"
        },
        { title: "Niuchehean", periodName: "Phanerozoic" },
        { title: "Jiangshanian", periodName: "Phanerozoic" },
        { title: "Paibian", periodName: "Phanerozoic" },
        { title: "Guzhangian", periodName: "Phanerozoic" },
        { title: "Wangcunian", periodName: "Phanerozoic" },
        { title: "Taijiangian", periodName: "Phanerozoic" },
        { title: "Duyunian", periodName: "Phanerozoic" },
        { title: "Nangaoan", periodName: "Phanerozoic" },
        { title: "Meishucunian", periodName: "Phanerozoic" },
        { title: "Jinningian", periodName: "Cambrian" }
      ]
    };
  }

  getDataFromName = name => {
    let query =
      'SELECT \
DISTINCT ?comm \
WHERE \
{\
  ?c rdfs:label "' +
      name +
      '"@en ;\
     rdfs:comment ?comm .\
     FILTER (lang(?comm) = "en" )\
}';
    let url = "http://dbpedia.org/sparql";
    var queryUrl = url + "?query=" + encodeURIComponent(query);

    axios({ url: queryUrl }).then(res => {
      let cleanedUpText = res.data.replace(/<[^>]+>/g, "");
      this.props.setMainData(cleanedUpText);
    });
  };

  render() {
    return (
      <Fragment>
        <Paper
          style={{ fontWeight: "bold", textAlign: "center" }}
          className="paperL"
        >
          List of Time Periods
        </Paper>

        {_.map(this.state.periodList, period => (
          <button
            style={{
              textAlign: "center",
              width: "100%",
              padding: "10px"
            }}
            key={period.title}
            onClick={() => {
              this.getDataFromName(period.periodName);
            }}
          >
            {period.title}
          </button>
        ))}
      </Fragment>
    );
  }
}
