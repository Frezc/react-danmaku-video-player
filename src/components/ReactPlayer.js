import React, {
  PropTypes
}
from 'react';

export default class ReactPlayer extends React.Component {
  componentDidMount() {
    if (window.videojs) {
      const components = Array.prototype.slice.call(this.refs.components.children);

      this.player = window.videojs(this.refs.video, {
        controlBar: false
      }, () => {});

      this.player.ready(() => {
        //test
        window.testPlayer = this.player;

        const playerEl = this.player.el();

        // number of controlBar, for location
        components.map(child => {
          switch (child.tagName) {
            case 'DEFAULTCONTROLS':
              this.addDefaultControls(child);
              break;
            case 'CONTROLS':
              this.addControls(child);
              break;
            default:
              child.style.position = 'absolute';
              playerEl.appendChild(child);
          }
        });
      });
    }
  }

  addDefaultControls(ele) {
    const v_offset = ele.getAttribute('offset') || 0;
    const cb = this.player.addChild('ControlBar');
    const cbEl = cb.el();
    cbEl.style.bottom = `${(v_offset * CONTROLBAR_HEIGHT).toString()}em`;
    ele.getAttribute('class') &&
      cb.addClass(ele.getAttribute('class'));
    return cb;
  }

  addControls(ele) {
    const v_offset = ele.getAttribute('offset') || 0;
    const cb = this.player.addChild('ControlBar');
    const cbEl = cb.el();
    this.clearDefaultControl(cb);
    cbEl.style.bottom = `${(v_offset * CONTROLBAR_HEIGHT).toString()}em`;
    Array.prototype.slice.call(ele.children).map(e => {
      if (e.tagName === "DEFAULTCONTROL") {
        cb.addChild(e.getAttribute('name'))
      } else {
        cbEl.appendChild(e);
      }
    });
    ele.getAttribute('class') &&
      cb.addClass(ele.getAttribute('class'));
    if (!ele.getAttribute('autoHidden'))
      cb.addClass('not_hidden')
    return cb;
  }

  hasDefaultControls(components) {
    for (let i = 0; i < components.length; i++) {
      if (components[i].tagName === 'DEFAULTCONTROLS') {
        return true;
      }
    }
  }

  clearDefaultControl(controlBar) {
    CONTROLS.map(c => {
      controlBar.removeChild(c);
    })
  }

  // not recommand to use
  playerEl() {
    return this.player;
  }

  removeSelf(node) {
    node.parentNode.removeChild(node);
  }

  render() {
    const {
      children, vjsControls, sources
    } = this.props;

    return (
      <div className="react_player">
        { window.videojs || <p>videojs loaded fail.</p> }
        <video ref="video" {...this.props} controls>
          {sources.map(source => 
            <source key={source.src} src={source.src} type={source.type} />)}
          <p>Your browser does not support html5 video!</p>
        </video>
        { window.videojs &&
            <div ref="components" style={{ position: 'absolute' }}>{children}</div>
        }
      </div>
    );
  }
}

ReactPlayer.propTypes = {
  children: PropTypes.node,
  sources: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    type: PropTypes.string
  }))
};

ReactPlayer.defaultProps = {};

const CONTROLS = [
  'playToggle',
  'volumeMenuButton',
  'currentTimeDisplay',
  'timeDivider',
  'durationDisplay',
  'progressControl',
  'liveDisplay',
  'remainingTimeDisplay',
  'customControlSpacer',
  'playbackRateMenuButton',
  'chaptersButton',
  'subtitlesButton',
  'captionsButton',
  'fullscreenToggle'
];

const CONTROLBAR_HEIGHT = 3.0;