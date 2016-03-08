import React, {
  PropTypes
}
from 'react';

export default class ReactPlayer extends React.Component {
  componentDidMount() {
    if (window.videojs) {
      this.player = window.videojs(this.refs.video, {
        
      }, () => {});

      this.player.ready(() => {
        const con = this.refs.video.parentNode;
        con.appendChild(this.refs.components);
      });
    }
  }

  render() {
    const { children, vjsControls } = this.props;

    return (
      <div className="main_video">
        { window.videojs || <p>videojs loaded fail.</p> }
        <video ref="video" className="video-js"
          {...this.props}>
          <source src="../../otsukimi_recital.mp4" type="video/mp4" />
          <source src="http://static.cdn.moe/ccltestingvideos/otsukimi_recital.webm" type="video/webm" />
          <p>Your browser does not support html5 video!</p>
        </video>
        { 
          window.videojs && 
            <div ref="components" className="components">
              {children}
            </div>
        }
      </div>
    );
  }
}

ReactPlayer.propTypes = {
  children: PropTypes.node,
};

ReactPlayer.defaultProps = {
};