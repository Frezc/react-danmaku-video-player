import React, {
  PropTypes
}
from 'react';
import ToggleButton from './ToggleButton';

function CommentStyleControl(props) {
  const { left, width, active } = props;

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
        icons={['vjs-icon-subtitles']}
        selected={0}
        dark={active} />
      <div className="RP-CommentStyleOption" style={{ left: 5 }}>
        <p className="style-title">弹幕字号</p>
        <div className="style-select">
          <div className="style-option on" value="18">
            小字号
          </div>
          <div className="style-option" value="25">
            中字号
          </div>
        </div>
        <p className="style-title">弹幕模式</p>
        <div className="style-select">
          <div className="style-option on" value="5">
            顶端渐隐
          </div>
          <div className="style-option" value="1">
            滚动字幕
          </div>
          <div className="style-option" value="4">
            底端渐隐
          </div>
        </div>
      </div>
    </div>
  );
}

CommentStyleControl.propTypes = {
  left: PropTypes.number,
  width: PropTypes.number,
  active: PropTypes.bool
};

CommentStyleControl.defaultProps = {
  left: 0,
  width: 40,
  active: false
};

export default CommentStyleControl;