import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import Main from './Main';
import Header from './Header';
import Contact from './Contact';
import Work from './Work';
import Footer from './Footer';

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path = "/p/*" component={Header} />
            <Route exact path="/" component={Main} />
            <Route exact path="/p/about" component={Contact} />
            <Route exact path="/p/work" component={Work} />
            <Route path="/" component={Footer} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);