import React, {
  PropTypes
}
from 'react';

import ReactPlayer from './ReactPlayer';
import BilibiliVideoControls from './BilibiliVideoControls';
import BilibiliCommentSender from './BilibiliCommentSender';

class ReactDanmakuPlayer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      play: false
    }
  }

  onPlayPress() {
    console.log('playpress')
    this.setState({
      play: !this.state.play
    });
  }

  render() {

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
          <BilibiliVideoControls
            play={this.state.play}
            onPlayPress={e => this.onPlayPress()}
            progress={30}
            buffered={50}
            wholeTime={1000}
          />
          <BilibiliCommentSender />
        </div>
      </ReactPlayer>
    );
  }
}

export default ReactDanmakuPlayer;
