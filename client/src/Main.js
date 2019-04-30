import React, { Component } from 'react';
import { Col, Row, Button, Modal } from 'react-materialize';
import './App.css';
import Contact from './Contact';

class Main extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        width: window.innerWidth
      }
  
      this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
      this.handleScrollDown = this.handleScrollDown.bind(this);
    }
  
    componentWillMount() {
      window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentDidMount() {
      if (this.state.width > 870) {
        setTimeout(this.handleScrollDown, 3200);
      }
    }
  
    componentWillUnmount() {
      window.removeEventListener('resize', this.handleWindowSizeChange);
    }
  
    handleWindowSizeChange() {
      this.setState({ width: window.innerWidth })
    }
  
    handleScrollDown() {
      this.refs.interactive.scrollIntoView({behavior: 'smooth'});
    }
  
    render() {
      return( 
        <div>
          <div className="web_container">
            <Row className="hero_row" s={12} m={12} l={12} style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center', alignItems: 'center', justifyItems: 'center', paddingTop: '25px' }}>
              <Col s={12} className="thank_you">
                <p className="slowfade">MARIA CORRALES</p>
                <p className="slowfade">MARIA CORRALES</p>
                <p className="fastfade">MARIA CORRALES</p>
                <p className="slowfade">MARIA CORRALES</p>
                <p className="slowfade">MARIA CORRALES</p>
                <p className="slowfade">MARIA CORRALES</p>
                <div className="come_again">
                  <div className="float_right" onClick={() => this.handleScrollDown()}>come again soon</div>
                </div>
              </Col>
            </Row>
          </div>
          <Row>
            <Col>
              <div ref="interactive">
                <Contact />
              </div>
            </Col>
          </Row>
        </div>
      )
  }
}

export default Main;