import React, { Component } from 'react';
import { Footer, Row, Col, Button } from 'react-materialize'

const linkTxt = {
  color: 'grey darken-4'
}

class FooterBar extends Component {
    render() {
      return(
        <Footer copyrights="© Maria Corrales 2018" style={{ backgroundColor: '#fcfcfc'}}>
          <Row style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <Col xs={12} s={6} m={3} l={3} xl={3}><Button className="transparent btn-flat" node="a" href="/" style={linkTxt}>Home</Button></Col>
              <Col xs={12} s={6} m={3} l={3} xl={3}><Button className="transparent btn-flat" node="a" href="/p/work" style={linkTxt}>Work</Button></Col>
              <Col xs={12} s={6} m={3} l={3} xl={3}><Button className="transparent btn-flat" node="a" href="/" style={linkTxt}>Blog</Button></Col>
              <Col xs={12} s={6} m={3} l={3} xl={3}><Button className="transparent btn-flat" node="a" href="/p/about" style={linkTxt}>About</Button></Col>
          </Row>
        </Footer>
      )
    }
}

export default FooterBar;