import React, {
  PropTypes
}
from 'react';
import ToggleButton from './ToggleButton';
import Bar from './Bar';

function CommentsDisplayControl(props) {
  const { left, width, active, onPress } = props;

  let style = {
    width: width
  };

  if (left >= 0) {
    style.left = left;
  } else {
    style.right = -left;
  }

  return (
    <div className="RP-Control" style={style}>
      <ToggleButton
        icons={['icon-comment']}
        selected={0}
        dark={active}
        width={width}
        onPress={onPress}
      />
      <div className="RP-CommentDisplayOption" style={{ left: -48 }}>
        <p className="label">弹幕不透明度</p>
        <div className="opacity-bar">
          <Bar
            firstProcess={60} />
        </div>
      </div>
    </div>
  );
}

CommentsDisplayControl.propTypes = {
  left: PropTypes.number,
  width: PropTypes.number,
  active: PropTypes.bool,
  onPress: PropTypes.func
};

CommentsDisplayControl.defaultProps = {
  left: 0,
  width: 25,
  active: false
};

export default CommentsDisplayControl;