import React, { Component } from 'react'

const btnText = {
  fontFamily: 'Libre Franklin, sans-serif',
  color: 'black'
}

const lrgTxt = {
  fontFamily: 'Arapey, serif',
  fontSize: '35px',
  lineHeight: '36px',
  padding: '0 10px 0 10px',
  letterSpacing: '10px',
  color: '#424242',
  fontWeight: '700'
}
const smlTxt = {
  fontFamily: 'Arapey, serif',
  fontSize: '25px',
  lineHeight: '25px',
  padding: '10px 5px 10px 5px',
  color: '#424242',
  fontWeight: '600'
}

class Header extends Component {
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

    renderULLeft() {
      if (window.location.pathname === '/p/work') {
        return(
          <li className="right">
            <a href="/p/blog" style={btnText}>Blog</a>
          </li>
        )
      } else if (window.location.pathname === '/p/about') {
        return(
          <li className="right">
            <a href="/p/work" style={btnText}>Work</a>
          </li>
        )
      } else {
        return(
          <li className="right">
            <a href="/p/about" style={btnText}>About</a>
          </li>
        )
      }
    }

    renderULRight() {
      if (window.location.pathname === '/p/work') {
        return(
          <li className="right">
            <a href="/p/about" style={btnText}>About</a>
          </li>
        )
      } else if (window.location.pathname === '/p/about') {
        return(
          <li className="right">
            <a href="/p/blog" style={btnText}>Blog</a>
          </li>
        )
      } else {
        return(
          <li className="right">
            <a href="/p/work" style={btnText}>Work</a>
          </li>
        )
      }
    }

    render() {
      const { width } = this.state;
      const isMobile  = width <= 768

      if (!isMobile) {
        return(
          <nav className="z-depth-0" style={{ backgroundColor: 'white' }}>
            <div className="nav-wrapper" id="headerContainer" >
              <ul class='right' style={{ padding: '8px 45px 5px 5px'}}>
                <li>
                  <a href='/' style={smlTxt}>Home</a>
                </li>
                <li>
                  <a href='/p/about' style={smlTxt}>About</a>
                </li>
                <li>
                  <a href='/p/work' style={smlTxt}>Work</a>
                </li>
              </ul>
            </div>
          </nav>
        )
      } else {
          return(
            <nav className="z-depth-0" style={{ backgroundColor: 'white' }}>
            <div className="nav-wrapper" id="headerContainer" >
              <ul class='right' style={{ padding: '8px 5% 5px 5px'}}>
                <li>
                  <a href='/' style={smlTxt}>Home</a>
                </li>
                <li>
                  <a href='/p/about' style={smlTxt}>About</a>
                </li>
                <li>
                  <a href='/p/work' style={smlTxt}>Work</a>
                </li>
              </ul>
            </div>
          </nav>
        )
      }
    }
}

export default Header;