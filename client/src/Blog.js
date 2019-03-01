import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchPosts from './actions/index';

const postDiv = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const centerItems = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '200px 0 100px 0'
}

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    if (this.props.posts) {
      return this.props.posts.map(post => {
        return(
          <div className="container" style={{ backgroundColor: '#fcfcfc', height: '100%' }}>
            <Row>
              <Col style={postDiv}>
                <div key={post.entryID} style={centerItems}>
                  <h5 style={{ fontFamily: 'Merriweather, serif' }}>{post.title}</h5>
                  <h6>April 5 2018</h6>
                  <p>{post.body}</p>
                </div>
              </Col>
            </Row>
          </div>
        )
      })
    } else {
      return(
        <div className="container">
          <h5>(loading spinner goes here)</h5>
        </div>
      )
    }
  }

  render() {
    return(
      <div style={{ backgroundColor: '#fcfcfc' , height: '100%', padding: '150px 0 0 0' }}>
        <div>
          {this.renderPosts()}
        </div>
      </div>
      )
    }
  }

  function mapStateToProps(state) {
    return { posts: state.posts }
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
      fetchPosts: fetchPosts
    }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(Blog);