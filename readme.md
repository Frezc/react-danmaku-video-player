This is a react CUSTOM PLAYER base on video.js.

To simplify api of video.js, we can use it more comfutable with react.

### Use
```html
<!-- controls default be true. you can disable it to set false. -->
<ReactPlayer width="640" height="480" muted className="video-js vjs-big-play-centered">
  <!-- customize components -->
  <div>
    <button type="button">
      WWW
    </button>
  </div>
  <div>Component</div>
  <defaultcontrols />
  <!-- Customize controls here. move controls by offset -->
  <controls offset="-36" className="custom_controls">
    <button className="vjs-control vjs-button vjs-subtitles-button">
      <span className="vjs-control-text">
        Helloworld
      </span>
    </button>
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