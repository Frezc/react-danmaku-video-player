import React, {
  PropTypes
}
from 'react';
import Bar from './Bar';

function VolumeBar(props) {
  const { width, volume, left } = props;

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
      <Bar
        firstProcess={volume} />
    </div>
  );
}

VolumeBar.propTypes = {
  width: PropTypes.number,
  volume: PropTypes.number.isRequired,
  left: PropTypes.number
};

VolumeBar.defaultProps = {
  width: 80,
  left: 0
};

export default VolumeBar;