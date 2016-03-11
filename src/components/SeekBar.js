import React, {
  PropTypes
}
from 'react';
import Bar from './Bar';

function SeekBar(props) {
  const { left } = props;

  return (
    <div className="RP-Control RP-Seekbar" style={{ left: left }}>
      <Bar 
        firstProcess={60}
        secondProcess={30}
        handle={true}/>
    </div>
  );
}


SeekBar.propTypes = {
  left: PropTypes.number
}

SeekBar.defaultProps = {
  left: 0
}

export default SeekBar;