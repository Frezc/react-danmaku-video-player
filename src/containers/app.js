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
import ReactPlayer from '../components/ReactPlayer';

//App Entry
class App extends React.Component {

  render() {
    const {
      text, dispatch
    } = this.props;

    return (
      <div>
  	    <ReactPlayer width="640" height="480" controls>
          <div>components</div>
          <div>components</div>
        </ReactPlayer>
	    </div>
    );
  }
}

App.propTypes = {};

function select(state) {
  return {};
}

export default connect(select)(App);