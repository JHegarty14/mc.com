import React, { Component } from 'react';
import { Row, Col, Modal, Button } from 'react-materialize';
import './App.css'

const mc = require('./images/mc.jpg');
const resume = require('./images/MariaCorralesCV.pdf');

const bgStyle = {
  backgroundColor: 'white',
  height: '100%'
}

const btn = {
  width: '150px',
  borderColor: '#424242',
  borderWidth: '1px',
  borderStyle: 'solid',
  textAlign: 'center',
  color: '#424242',
  fontFamily: 'News Cycle, sans-serif',
}

const col = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const txtBlock = {
  padding: '50px 0 0px 0'
}

const header = {
    fontFamily: 'Dosis, serif',
    fontSize: '25px',
    lineHeight: '35px'
}

const bodyTxt = {
    padding: '15px 0 0 0',
    fontFamily: 'News Cycle, sans-serif',
    fontSize: '20px',
    lineHeight: '29px'
}

const hoverTxt = {
  fontFamily: 'News Cycle, sans-serif',
  fontSize: '20px',
  lineHeight: '29px'
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

class Contact extends Component {
    constructor(props) {
      super(props);

      this.state = {
        email: 'mcorrales051@gmail.com',
        hover: false
      }
      
      this.copyToClipboard = this.copyToClipboard.bind(this);
    }

    toggleHover() {
      this.setState({ hover: !this.state.hover })
    }

    copyToClipboard(e) {
        e.preventDefault()

        const textField = document.createElement('textarea');
        textField.innerText = 'mcorrales051@gmail.com'
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
        this.setState({ email: 'Copied!' })
        setTimeout(() => {
            this.setState({ email: 'mcorrales051@gmail.com'})
        }, 2500);
    }

    render() {
        return(
          <div style={{ backgroundColor: 'white', height: '100%' }}>
            <div style={bgStyle}>
              <Row style={{ padding: '100px 0 0 0'}}>
                <Col xs={12} s={12} m={7} l={7} xl={7} style={col}>
                  <div className="container" style={txtBlock}>
                    <h6 style={bodyTxt}>I'm a Colombian born and New England raised writer, former project manager and freelance PA currently based in Los Angeles. After graduating from NYU's Tisch School of the Arts with degrees in Dramatic Writing & French, I mostly divided my time doing literary research and translation. I'm interested in telling stories that further explore the narratives of POC folx at the intersection of pop culture + politics across a variety of mediums.</h6>
                    <p style={bodyTxt}>Some of my interests include trying to learn multiple new languages at once, discussing latin music at length to anyone who will listen, and not letting twitter ruin my day.</p>
                  </div>
                </Col>
                <Col xs={12} s={12} m={5} l={5} xl={5}>
                  <div className="container" style={txtBlock}>
                    <img src={mc} style={{ height: '70%', width: '70%', minHeight: '300px', minWidth: '200px' }} alt=""/>
                    <ul>
                      <li style={bodyTxt}>Reach out:</li>
                      <li style={hoverTxt} className='links'><a href="https://www.instagram.com/mariacorrales_" target="_blank" rel="noopener noreferrer"><span style={{ fontFamily: 'News Cycle, sans-serif' }}>Instagram</span></a></li>
                      <li style={hoverTxt} className='links'><a href="https://www.linkedin.com/in/maria-corrales" target="_blank" rel="noopener noreferrer"><span style={{ fontFamily: 'News Cycle, sans-serif' }}>LinkedIn</span></a></li>
                      <li style={hoverTxt} className='links'><a href="https://open.spotify.com/user/ohhmaria" target="_blank" rel="noopener noreferrer"><span style={{ fontFamily: 'News Cycle, sans-serif' }}>Spotify</span></a></li>
                      <li style={hoverTxt} className='links'><a href="https://swearby.com/profile/maria-corrales" target="_blank" rel="noopener noreferrer"><span style={{ fontFamily: 'News Cycle, sans-serif' }}>SwearBy</span></a></li>
                      <li style={hoverTxt} className='links'><a onClick={this.copyToClipboard}><span style={{ fontFamily: 'News Cycle, sans-serif',cursor: 'pointer' }}>{this.state.email}</span></a></li>
                    </ul>
                  </div>
                  
                </Col>
              </Row>
            </div>
          </div>
        )
    }
}

export default Contact;