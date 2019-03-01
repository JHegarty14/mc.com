import React, { Component } from 'react';
import { Col, Row, Button, Modal } from 'react-materialize';
import Download from './Download';
const bgimage = require('./images/bgpic.jpg');
const mcLogo = require('./images/eggshellname.jpg');

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth
    }

    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
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

  const fern = {
    backgroundSize: 'contain',
    overflow: 'hidden',
    height: '1240px',
    width: '1241px',
    minHeight: '1240px',
    minWidth: '1241px',
    maxHeight: '1240px',
    maxWidth: '1240px'
  }

  const namePic = {
    height: '85%',
    width: '85%',
    maxWidth: '85%',
    maxHeight: '85%',
    minWidth: '85%',
    minHeight: '85%'
  }

  const name = {
    display: '-webkit-box',
    display: '-ms-flexbox',
    display: 'flex',
    webkitboxorient: 'horizontal',
    webkitboxdirection: 'normal',
        msflexdirection: 'row',
            flexDirection: 'row',
    msflexwrap: 'wrap',
        flexWrap: 'wrap',
    flexBasis: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const nameDiv = {
    display: '-webkit-box',
    display: '-ms-flexbox',
    display: 'flex',
    webkitboxorient: 'horizontal',
    webkitboxdirection: 'normal',
        msflexdirection: 'row',
            flexDirection: 'row',
    msflexwrap: 'wrap',
        flexWrap: 'wrap',
    flexBasis: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    padding: 0,
    margin: 0
  }

  const fernDiv = {
    backgroundSize: 'contain',
    position: 'relative',
    height: '100vh',
    padding: 0,
    margin: 0,
    display: '-webkit-box',
    display: '-ms-flexbox',
    display: 'flex',
    webkitboxorient: 'horizontal',
    webkitboxdirection: 'normal',
        msflexdirection: 'row',
            flexDirection: 'row',
    msflexwrap: 'wrap',
        flexWrap: 'wrap',
    flexBasis: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const btns = {
    display: '-webkit-box',
    display: '-ms-flexbox',
    display: 'flex',
    webkitboxorient: 'horizontal',
    webkitboxdirection: 'normal',
        msflexdirection: 'row',
            flexDirection: 'row',
    msflexwrap: 'wrap',
        flexWrap: 'wrap',
    flexBasis: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  }

  const btn = {
    width: '130px',
    height: '40px',
    borderColor: 'white',
    borderWidth: '1x',
    borderStyle: 'solid',
    color: 'white'
  }

  const divSpacing = {
    padding: '50px 0 50px 0'
  }

  const mainStyle = {
    backgroundColor: 'white',
    height: '100vh',
    backgroundSize: 'contain',
    overflow: 'hidden'
  }
  const mobileStyle = {
    backgroundColor: 'white',
    height: '200vh',
    backgroundSize: 'contain',
    overflow: 'hidden'
  }

    if (this.state.width > 600) {
      return( 
        <div style={mainStyle}>
          <Row style={{ overflow: 'hidden' }}>
            <Col xs={12} s={12} m={6} l={6} xl={6} style={{ backgroundSize: 'contain', overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
              <div style={nameDiv}>
                <div style={name}>
                  <img src={mcLogo} style={namePic} alt="" />
                </div>
              </div>
            </Col>
            <Col xs={12} s={12} m={6} l={6} xl={6} style={{ backgroundSize: 'contain', overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
              <div style={fernDiv}>
                <img src={bgimage} style={fern} alt="" />
                <div style={btns}>
                  <Button style={btn} className="transparent" node="a" href="/p/about">About</Button>
                  <div style={divSpacing}></div>
                  <Button style={btn} className="transparent" node="a" href="/p/work">Work</Button>
                  <div style={divSpacing}></div>
                  <Modal actions="" trigger={<Button style={btn} className="transparent" node="a" href="/">Resume</Button>} style={{ backgrounColor: 'white' }}><Download /></Modal>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      )
    } else {
        return(
          <div style={mobileStyle}>
          <Row style={{ overflow: 'hidden' }}>
            <Col xs={12} s={12} m={6} l={6} xl={6} style={{ backgroundSize: 'contain', overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
              <div style={nameDiv}>
                <div style={name}>
                  <img src={mcLogo} style={namePic} alt="" />
                </div>
              </div>
            </Col>
            <Col xs={12} s={12} m={6} l={6} xl={6} style={{ backgroundSize: 'auto', overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
              <div style={fernDiv}>
                <img src={bgimage} style={fern} alt="" />
                <div style={btns}>
                  <Button style={btn} className="transparent" node="a" href="/p/about">About</Button>
                  <div style={divSpacing}></div>
                  <Button style={btn} className="transparent" node="a" href="/p/work">Work</Button>
                  <div style={divSpacing}></div>
                  <Modal actions="" trigger={<Button style={btn} className="transparent" node="a" href="/">Resume</Button>} style={{ backgrounColor: 'white' }}><Download /></Modal>
                  
                </div>
              </div>
            </Col>
          </Row>
        </div>
        )
    }
  }
}

export default Main;