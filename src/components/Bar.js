import React, {
  PropTypes
}
from 'react';

function sureInside(proc) {
  return Math.min(100, Math.max(0, proc));
}

function getClassName(handle) {
  if (handle) {
    return 'bar handle';
  } else {
    return 'bar';
  }
}

function Bar(props) {
  let { firstProcess, secondProcess } = props;
  firstProcess = sureInside(firstProcess);
  secondProcess = sureInside(secondProcess);

  const { handle } = props;

  return (
    <div className={getClassName(handle)}>
      <div className="load" style={{ width: firstProcess + '%' }}></div>
      <div className="dark" style={{ width: secondProcess + '%' }}></div>
    </div>
  );
}

Bar.propTypes = {
  firstProcess: PropTypes.number,
  secondProcess: PropTypes.number,
  handle: PropTypes.bool
};

Bar.defaultProps = {
  firstProcess: 0,
  secondProcess: 0,
  handle: false
};

export default Bar;