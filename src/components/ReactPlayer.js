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
          let cb, cbEl;
          const v_offset = child.getAttribute('offset') || 0;
          switch (child.tagName) {
            case 'DEFAULTCONTROLS':
              cb = this.player.addChild('ControlBar');
              cbEl = cb.el();
              cbEl.style.bottom = `${v_offset.toString()}px`;
              child.getAttribute('class') && 
                cb.addClass(child.getAttribute('class'));
              break;
            case 'CONTROLS':
              cb = this.player.addChild('ControlBar');
              cbEl = cb.el();
              this.clearDefaultControl(cb);
              cbEl.style.bottom = `${v_offset.toString()}px`;
              Array.prototype.slice.call(child.children).map(e => {
                cbEl.appendChild(e);
              });
              child.getAttribute('class') && 
                cb.addClass(child.getAttribute('class'));
              break;
            default:
              playerEl.appendChild(child);
          }
        });

        this.removeSelf(this.refs.components);
      });
    }
  }

  hasDefaultControls(components) {
    for (let i = 0; i < components.length; i++) {
      if (components[i].tagName === 'DEFAULTCONTROLS') {
        return true;
      }
    }
  }

  clearDefaultControl(controlBar) {
    controls.map(c => {
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

const controls = [
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