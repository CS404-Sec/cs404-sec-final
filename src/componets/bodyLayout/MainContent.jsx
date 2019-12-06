import React, { Component } from 'react'
// import axios from 'axios'
import "../../styles/MainContent.css";

export default class MainContent extends Component {


    render() {
        return (
            <div className="Wrapper">
                hello

                <div id="leftSide" >
                    Left Side
                    </div>

                <div id="rightSide">
                    <div id="topRight">top right</div>
                    <div id="BottomRight">bottom right</div>
                </div>
            </div>
        )
    }
}
