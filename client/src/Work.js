import React, { Component } from 'react';
import { Row, Col, Collapsible, CollapsibleItem } from 'react-materialize';
import spdf from 'simple-react-pdf';
import './App.css'

const oneDay = require('./images/OneDay.pdf');
const play = require('./images/play.pdf');

const exDiv = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'left',
  alignItems: 'left',
  padding: '0 70px 0 70px'
}

const alignLinks = {
  textAlign: 'left',
  padding: '100px 0 100px 0'
}

const header = {
  fontFamily: 'News Cycle, sans-serif',
  fontSize: '35px',
  lineHeight: '35px',
  color: '#424242'
}

const bodyTxt = {
  padding: '15px 0 0 0',
  fontFamily: 'News Cycle, sans-serif',
  fontSize: '25px',
  lineHeight: '29px',
  color: '#424242'
}

class Work extends Component {

  viewOne() {
    window.open(oneDay);
  }

  viewTwo() {
    window.open(play);
  }

  render() {
    //return(
    //  <div style={{ backgroundColor: 'white', height: '100vh' }}>
    //    <div className="container" style={alignLinks}>
    //      <h5 style={header}>my work</h5>
    //      <div style={{ padding: '50px 0 0 20px' }}>
    //        <a onClick={this.viewOne} href='#'><span style={{ fontFamily: 'News Cycle, sans-serif', fontSize: '27px' }}>One Day at a Time: Season One Review</span></a>
    //      </div>
    //      <div style={{ padding: '50px 0 0 20px' }}>
    //        <a onClick={this.viewTwo} href='#'><span style={{ fontFamily: 'News Cycle, sans-serif', fontSize: '27px' }}>Add Nauseum</span></a>
    //      </div>
    //    </div>
    //  </div>
    //)
    return(
      <div style={{ backgroundColor: 'white', height: '100vh' }}>
        <div className="container" style={alignLinks}>
          <h5 style={header}>my work</h5>
          <p>Coming soon!</p>
        </div>
      </div>
    )
  }

}

export default Work;