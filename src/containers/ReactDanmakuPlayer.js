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
      play: false,
      commentsDisplay: false,
      loop: false,
      widescreen: false,
      fullscreen: false
    }
  }

  onPlayPress() {
    console.log('playpress')
    this.setState({
      play: !this.state.play
    });
  }

  onCommentsDisplay() {
    console.log('commentDisplay')
    this.setState({
      commentsDisplay: !this.state.commentsDisplay
    });
  }

  onLoopPress() {
    this.setState({
      loop: !this.state.loop
    });
  }

  onWidescreenPress() {
    this.setState({
      widescreen: !this.state.widescreen
    });
  }

  onFullscreenPress() {
    this.setState({
      fullscreen: !this.state.fullscreen
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
            volume={0}
            commentsDisplay={this.state.commentsDisplay}
            onCommentsDisplay={e => this.onCommentsDisplay()}
            loop={this.state.loop}
            onLoopPress={e => this.onLoopPress()}
            widescreen={this.state.widescreen}
            onWidescreenPress={e => this.onWidescreenPress()}
            fullscreen={this.state.fullscreen}
            onFullscreenPress={e => this.onFullscreenPress()}
          />
          <BilibiliCommentSender />
        </div>
      </ReactPlayer>
    );
  }
}

export default ReactDanmakuPlayer;
