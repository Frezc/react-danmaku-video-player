import React, {
  PropTypes
}
from 'react';
import ToggleButton from './ToggleButton';
import CommentsOption from './CommentsOption';

function CommentsControl(props) {
  const { left, active } = props;

  return (
    <div>
      <ToggleButton
        left={left}
        icons={['vjs-icon-subtitles']}
        selected={0}
        dark={active} />
      <CommentsOption
        left={left + 48} />
    </div>
  );
}

CommentsControl.propTypes = {
  left: PropTypes.number,
  active: PropTypes.bool
};

CommentsControl.defaultProps = {
  active: true
};

export default CommentsControl;