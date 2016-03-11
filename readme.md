This is a react CUSTOM PLAYER base on video.js.

To simplify api of video.js, we can use it more comfutable with react.

### Use
```html
<!-- controls default be true. you can disable it to set false. -->
<ReactPlayer width="680" height="493" muted className="video-js vjs-big-play-centered vjs-default-skin"
  sources={[{
    src: '../../otsukimi_recital.mp4', 
    type: 'video/mp4'
  }, {
    src: 'http://static.cdn.moe/ccltestingvideos/otsukimi_recital.webm',
    type: 'video/webm'
  }]} >
  <!-- custom components -->
  <div>
    <button type="button">
      WWW
    </button>
  </div>
  <div>Component</div>
  <!-- custom controls -->
  <controls 
    offset="-1"
    autoHidden="false"
    className="custom_controls" >
    <defaultcontrol name="PlayToggle" />
    <defaultcontrol name="ProgressControl" />
    <defaultcontrol name="MuteToggle" />
    <defaultcontrol name="VolumeControl" />
    <button
      index="0"
      className="vjs-control vjs-button vjs-subtitles-button">
      <span className="vjs-control-text">
        Helloworld
      </span>
    </button>
    <defaultcontrol name="FullscreenToggle" />
  </controls>
</ReactPlayer>
```

Powered by
- [react-redux-starter](https://github.com/Frezc/react-redux-starter.git)
- [video.js](https://github.com/videojs/video.js)
- [comment-core-library](https://github.com/jabbany/CommentCoreLibrary)


###Getting Started

1. npm install
2. ```npm run dev``` for watch mode. ```npm run build``` for production mode
3. open index.html
4. add code in src/ or edit index.html and save