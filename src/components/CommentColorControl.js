import React, {
  PropTypes
}
from 'react';
import ToggleButton from './ToggleButton';

function getOptionClassName(visible) {
  if (visible) {
    return "RP-CommentColorOption RP-Visible";
  } else {
    return "RP-CommentColorOption RP-Hidden";
  }
}

function CommentColorControl(props) {
  const { left, width, active, visible } = props;

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
        icons={['icon-ajust']}
        selected={0}
        dark={active}
        width={width} />
      <div className={getOptionClassName(visible)} style={{ left: 5 }}>
        <div className="RP-ColorPicker">
          <div className="color-pick" style={{ backgroundColor: 'rgb(255, 0, 0)' }}>
            <div className="overlay1">
              <div className="overlay2">
                <div className="color-selector-outer" style={{ left: 30, top: 50 }}>
                  <div className="color-selector-inner"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="hue-pick">
            <div className="hue-pick-arrows" style={{ top: 0 }}>
              <div className="hue-pick-larrow"></div>
              <div className="hue-pick-rarrow"></div>
            </div>
          </div>
          <div className="current-color" style={{ backgroundColor: 'rgb(84, 0, 0)' }}></div>
          <div className="hex-field">
            <div className="field-letter">#</div>
            <input type="text" maxLength="6" size="6" value="FFFFFF" />
          </div>
          <div className="color-field rgb-r" style={{ top: 42, left: 207 }}>
            <div className="field-letter">R</div>
            <input type="text" maxLength="3" size="6" value="255" />
            <div className="color-field-arrows">
              <div className="color-field-uparr" />
              <div className="color-field-dnarr" />
            </div>
          </div>
          <div className="color-field rgb-g" style={{ top: 73, left: 207 }}>
            <div className="field-letter">G</div>
            <input type="text" maxLength="3" size="6" value="255" />
            <div className="color-field-arrows">
              <div className="color-field-uparr" />
              <div className="color-field-dnarr" />
            </div>
          </div>
          <div className="color-field rgb-b" style={{ top: 104, left: 207 }}>
            <div className="field-letter">B</div>
            <input type="text" maxLength="3" size="6" value="255" />
            <div className="color-field-arrows">
              <div className="color-field-uparr" />
              <div className="color-field-dnarr" />
            </div>
          </div>
          <div className="color-field hsb-h" style={{ top: 42, left: 277 }}>
            <div className="field-letter">H</div>
            <input type="text" maxLength="3" size="6" value="255" />
            <div className="color-field-arrows">
              <div className="color-field-uparr" />
              <div className="color-field-dnarr" />
            </div>
          </div>
          <div className="color-field hsb-s" style={{ top: 73, left: 277 }}>
            <div className="field-letter">S</div>
            <input type="text" maxLength="3" size="6" value="255" />
            <div className="color-field-arrows">
              <div className="color-field-uparr" />
              <div className="color-field-dnarr" />
            </div>
          </div>
          <div className="color-field hsb-b" style={{ top: 104, left: 277 }}>
            <div className="field-letter">B</div>
            <input type="text" maxLength="3" size="6" value="255" />
            <div className="color-field-arrows">
              <div className="color-field-uparr" />
              <div className="color-field-dnarr" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CommentColorControl.propTypes = {
  left: PropTypes.number,
  width: PropTypes.number,
  active: PropTypes.bool,
  visible: PropTypes.bool
};

CommentColorControl.defaultProps = {
  left: 0,
  width: 40,
  active: false,
  visible: false
};

export default CommentColorControl;