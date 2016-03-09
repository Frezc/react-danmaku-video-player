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
  	    <ReactPlayer width="640" height="480" muted className="video-js vjs-big-play-centered">
          <div>
            <button type="button">
              WWW
            </button>
          </div>
          <div>Component</div>
          <defaultcontrols />
          <controls offset="-36" className="custom_controls">
            <button className="vjs-control vjs-button vjs-subtitles-button">
              <span className="vjs-control-text">
                Helloworld
              </span>
            </button>
          </controls>
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