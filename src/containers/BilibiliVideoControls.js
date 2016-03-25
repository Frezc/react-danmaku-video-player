import React, {
  PropTypes
}
from 'react';
import ToggleButton from '../components/ToggleButton';
import SeekBar from '../components/SeekBar';
import TimeLabel from '../components/TimeLabel';
import VolumeBar from '../components/VolumeBar';
import CommentsDisplayControl from '../components/CommentsDisplayControl';

function BilibiliVideoControls(props) {
  const { 
    play, onPlayPress, loop, onLoopPress, widescreen, 
    onWidescreenPress, fullscreen, onFullscreenPress,
    commentsDisplay, onCommentsDisplay, volume, onVolumeChange
  } = props;

  return (
    <div className="RP-Controls">
      <ToggleButton 
        icons={['icon-play', 'icon-pause']} 
        selected={play ? 1 : 0}
        width={35}
        left={0}
        onPress={onPlayPress}
      />
      <SeekBar
        left={35}/>
      <TimeLabel 
        left={-184}/>
      <ToggleButton 
        icons={['icon-volume-up', 'icon-volume-off']} 
        selected={volume == 0 ? 1 : 0}
        left={-165}
      />
      <VolumeBar
        width={80}
        volume={volume}
        left={-93}
      />
      <CommentsDisplayControl
        left={-75}
        active={commentsDisplay}
        onPress={onCommentsDisplay}
      />
      <ToggleButton 
        icons={['icon-retweet']} 
        selected={0}
        left={-50}
        dark={loop}
        onPress={onLoopPress}
      />
      <ToggleButton 
        icons={['icon-resize-horizontal']} 
        selected={0}
        left={-25}
        dark={widescreen}
        onPress={onWidescreenPress}
      />
      <ToggleButton 
        icons={['icon-resize-full', 'icon-resize-small']} 
        selected={fullscreen ? 1 : 0}
        left={-0.0000000001}
        onPress={onFullscreenPress}
      />
    </div>
  );
}

BilibiliVideoControls.propTypes = {
  // the type of prop that is number is between [0, 100]
  play: PropTypes.bool,
  onPlayPress: PropTypes.func,
  progress: PropTypes.number.isRequired,
  buffered: PropTypes.number.isRequired,
  onProgressChange: PropTypes.func,
  wholeTime: PropTypes.number.isRequired,
  volume: PropTypes.number,
  onVolumeChange: PropTypes.func,
  commentsDisplay: PropTypes.bool,
  onCommentsDisplay: PropTypes.func,
  commentsAlpha: PropTypes.number,
  onCommentsAlphaChange: PropTypes.func,
  loop: PropTypes.bool,
  onLoopPress: PropTypes.func,
  widescreen: PropTypes.bool,
  onWidescreenPress: PropTypes.func,
  fullscreen: PropTypes.bool,
  onFullscreenPress: PropTypes.func
};

BilibiliVideoControls.defaultProps = {
  play: false,
  volume: 0,
  commentsDisplay: false,
  commentsAlpha: 100,
  loop: false,
  widescreen: false,
  fullscreen: false
};

export default BilibiliVideoControls;