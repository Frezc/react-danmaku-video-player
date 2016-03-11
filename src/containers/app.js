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
import VideoControls from '../components/VideoControls';

//App Entry
class App extends React.Component {

  render() {
    const {
      text, dispatch
    } = this.props;

    return (
  	    <ReactPlayer width="680" height="493" muted className="video-js vjs-big-play-centered vjs-default-skin"
          sources={[{
            src: '../../otsukimi_recital.mp4', 
            type: 'video/mp4'
          }, {
            src: 'http://static.cdn.moe/ccltestingvideos/otsukimi_recital.webm',
            type: 'video/webm'
          }]} >
          <div className="bottom_container outside">
            <VideoControls />
          </div>
        </ReactPlayer>
    );
  }
}

App.propTypes = {};

function select(state) {
  return {};
}

export default connect(select)(App);