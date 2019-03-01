import React, { Component } from 'react';
import { Row, Col, Modal, Button } from 'react-materialize';

const mc = require('./images/mc.jpg');
const resume = require('./images/MariaCorralesCV.pdf');

const btn = {
    width: '150px',
    borderColor: '#424242',
    borderWidth: '1px',
    borderStyle: 'solid',
    textAlign: 'center',
    color: '#424242',
    fontFamily: 'News Cycle, sans-serif',
  }

class Download extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        width: window.innerWidth
      }
  
      this.view = this.view.bind(this);
      this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
    }
  
    view() {
      window.open(resume);
    }
  
    componentWillMount() {
      window.addEventListener('resize', this.handleWindowSizeChange);
    }
  
    componentWillUnmount() {
      window.removeEventListener('resize', this.handleWindowSizeChange);
    }
  
    handleWindowSizeChange() {
      this.setState({ width: window.innerWidth })
    }
  
    render() {
      if (this.state.width > 430) {
        return(
          <div style={{ padding: '25px 0 0 0' }}>
            <h6 style={{ fontFamily: 'News Cycle, sans-serif', textAlign: 'center', fontSize: '20px' }}>Select to download as pdf or view resume in browser</h6>
            <Col style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '50px 0 0 0' }}>
              <Row>
                <Button className='transparent modal-close' style={btn} node='a' href={resume} download>Download</Button>
              </Row>
              <Row>
                <Button className='transparent modal-close' style={btn} onClick={this.view}>View</Button>
              </Row>
            </Col>
          </div>
        )
      } else {
        return(
          <div style={{ padding: '25px 0 0 0' }}>
            <h6 style={{ fontFamily: 'Libre Baskerville, serif', textAlign: 'center', fontSize: '20px' }}>Click to download</h6>
            <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px 0 0 0' }}>
              <Row>
                <Button className='transparent modal-close' style={btn} node='a' href={resume} download>Download</Button>
              </Row>
            </Col>
          </div>
        )
      }
    }
  }

export default Download;