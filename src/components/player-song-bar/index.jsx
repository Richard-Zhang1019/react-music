import React, { memo } from 'react';

import { PlayerBar } from './style';

const ZXYPlayerSongBar = memo((props) => {

  const { favorTitle, shareTitle, commentTitle, subscribed, shareCount, commentCount } = props;
  const downloadTitle = "下载";
  
  return (
    <PlayerBar>
      <span className="play">
        <span className="play-icon sprite_button">
          <span className="play sprite_button">
            <i className="sprite_button"></i>
            <span>播放</span>
          </span>
        </span>
        <span className="add-icon sprite_button">+</span>
      </span>
      <span className="item sprite_button">
        <i className="icon favor-icon sprite_button">{favorTitle || subscribed}</i>
      </span>
      <span className="item sprite_button">
        <i className="icon share-icon sprite_button">{shareTitle || shareCount}</i>
      </span>
      <span className="item sprite_button">
        <i className="icon download-icon sprite_button">{downloadTitle}</i>
      </span>
      <span className="item sprite_button">
        <i className="icon comment-icon sprite_button">{commentTitle || commentCount}</i>
      </span>
    </PlayerBar>
  )
})

export default ZXYPlayerSongBar;