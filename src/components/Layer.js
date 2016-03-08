import React, {
  PropTypes
}
from 'react';
import {
  CommentManager
}
from '../comment-core-library/CommentCoreLibrary';
import {
  CommentLoader
}
from '../comment-core-library/libxml';

export default class DanmakuLayer extends React.Component {

  componentDidMount() {
    this.cm = new CommentManager(this.refs.danmakuContainer);
    this.cm.init(); // 初始化

    CommentLoader('http://jabbany.me/CommentCoreLibrary/test/test.xml', this.cm);

    // 启动播放弹幕（在未启动状态下弹幕不会移动）
    this.cm.start();

    // let startTime = Date.now();
    // setInterval(() => {
    // 		var playTime = Date.now() - startTime; // 用起始时间和现在时间的差模拟播放
    // 		CM.time(playTime); // 通报播放时间
    // 	}, 100);

    //http://jabbany.me/CommentCoreLibrary/test/test.xml bilibili
  }

  componentWillReceiveProps(nextProps) {
    this.cm.time(nextProps.currentTime * 1000);
  }

  render() {

    return (
      <div id='my-player' className='fill_container abp'>
			  <div id='my-comment-stage' className='container' ref="danmakuContainer"></div>
		  </div>
    );
  }
}