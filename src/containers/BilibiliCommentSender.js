import React, {
  PropTypes
}
from 'react';
import CommentStyleControl from '../components/CommentStyleControl';
import CommentColorControl from '../components/CommentColorControl';

function BilibiliCommentSender(props) {

  return (
    <div className="RP-Controls">
      <CommentStyleControl
        visible={false} />
      <CommentColorControl
        left={40}
        visible={false} />
      <input className="RP-Comment-Input" style={{ left: 80 }} />
      <div className="RP-Comment-Send" style={{ right: -1 }}>发送</div>
    </div>
  );
}

export default BilibiliCommentSender;