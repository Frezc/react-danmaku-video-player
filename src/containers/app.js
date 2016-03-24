import React, {
  PropTypes
}
from 'react';
import {
  connect
}
from 'react-redux';

//import your action creators
import {
  textChange
}
from '../actions';

//import your components
import ReactDanmakuPlayer from './ReactDanmakuPlayer';

//App Entry
class App extends React.Component {

  render() {
    const {
      dispatch
    } = this.props;

    return (
      <ReactDanmakuPlayer />
    );
  }
}

App.propTypes = {};

function select(state) {
  return {};
}

export default connect(select)(App);