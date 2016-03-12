import React, {
  PropTypes
}
from 'react';
import ToggleButton from './ToggleButton';
import SeekBar from './SeekBar';
import TimeLabel from './TimeLabel';
import VolumeBar from './VolumeBar';
import CommentsDisplayControl from './CommentsDisplayControl';

function BilibiliVideoControls(props) {
  return (
    <div className="RP-Controls">
      <ToggleButton 
        icons={['vjs-icon-play', 'vjs-icon-pause']} 
        selected={0}
        width={35}
        left={0}
      />
      <SeekBar
        left={35}/>
      <TimeLabel 
        left={-184}/>
      <ToggleButton 
        icons={['vjs-icon-volume-high', 'vjs-icon-volume-mute']} 
        selected={0}
        left={-165}
      />
      <VolumeBar
        width={80}
        volume={50}
        left={-93} />
      <CommentsDisplayControl
        left={-75} />
      <ToggleButton 
        icons={['vjs-icon-volume-high', 'vjs-icon-volume-mute']} 
        selected={0}
        left={-50}
      />
      <ToggleButton 
        icons={['vjs-icon-volume-high', 'vjs-icon-volume-mute']} 
        selected={0}
        left={-25}
      />
      <ToggleButton 
        icons={['vjs-icon-fullscreen-enter', 'vjs-icon-fullscreen-exit']} 
        selected={0}
        left={-0.0000000001}
      />
    </div>
  );
}


export default BilibiliVideoControls;