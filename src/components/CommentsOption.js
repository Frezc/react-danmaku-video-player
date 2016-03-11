import React, {
  PropTypes
}
from 'react';
import Bar from './Bar';

function CommentsOption(props) {
  const { left } = props;

  let style = {};

  if (left >= 0) {
    style.left = left;
  } else {
    style.right = -left;
  }

  return (
    <div className="RP-CommentOption" style={style}>
      <p className="label">弹幕不透明度</p>
      <div className="opacity-bar">
        <Bar
          firstProcess={60} />
      </div>
    </div>
  );
}

CommentsOption.propTypes = {
  left: PropTypes.number
};

CommentsOption.defaultProps = {
  left: 0
};

export default CommentsOption;