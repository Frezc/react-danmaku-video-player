import React, {
  PropTypes
}
from 'react';

function TimeLabel(props) {
  const { left } = props;

  let style = {};

  if (left >= 0) {
    style.left = left;
  } else {
    style.right = -left;
  }

  return (
    <div className="RP-Control RP-TimeLabel"
      style={style}>
      {'00:13 / 02:05'}
    </div>
  );
}


TimeLabel.propTypes = {
  left: PropTypes.number
};

TimeLabel.defaultProps = {
  left: 0
};

export default TimeLabel;