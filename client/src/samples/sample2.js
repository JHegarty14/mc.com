import React, { Component } from 'react'
import { Modal } from 'react-materialize';

class SampleTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
           imgSrc: 'http://demo.sodhanalibrary.com/images/twitter_blue.png'
        };
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
      }
    
      handleMouseOver() {
        this.setState({
          imgSrc: 'http://demo.sodhanalibrary.com/images/twitter_brown.png'
        });
      }
    
      handleMouseOut() {
        this.setState({
          imgSrc: 'http://demo.sodhanalibrary.com/images/twitter_blue.png'
        });
      }
    
      render() {
        return (
          <div>
            <Modal header="Sample One" trigger={ <img onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc} alt=""/> }>

            </Modal>
          </div>
        );
    }
}

export default SampleTwo;