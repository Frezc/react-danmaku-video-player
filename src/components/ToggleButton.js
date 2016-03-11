import React, {
  PropTypes
}
from 'react';

function getClassName(icon, dark) {
  return `RP-Control RP-Button ${icon} ${dark ? 'on' : ''}`;
}

function ToggleButton(props) {
  const { icons, selected, dark, width, left } = props;

  let style = { 
    width: width
  };

  if (left >= 0) {
    style.left = left;
  } else {
    style.right = -left;
  }

  return (
    <div 
      className={getClassName(icons[selected], dark)} 
      style={style} 
    >
    </div>
  );
}


ToggleButton.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.number.isRequired,
  dark: PropTypes.bool,
  width: PropTypes.number,
  left: PropTypes.number
};

ToggleButton.defaultProps = {
  left: 0,
  width: 25,
  dark: false
};

export default ToggleButton;