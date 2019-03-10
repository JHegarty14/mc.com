import React, { Component } from 'react';
import { Footer, Row, Col, Button } from 'react-materialize'
import './App.css';

const linkTxt = {
  color: 'grey darken-4'
}

class FooterBar extends Component {
    render() {
      return(
        <Footer copyrights="© Maria Corrales 2019" style={{ backgroundColor: 'red'}}>
          <Row>
            <Col xs={12} s={12} m={12} l={12} xl={12}>
              <Button className="res_button" flat={true}>Download Resume</Button>
            </Col>
          </Row>
        </Footer>
      )
    }
}

export default FooterBar;