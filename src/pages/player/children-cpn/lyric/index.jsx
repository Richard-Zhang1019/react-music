import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { LyricWrapper } from './styled';

const Lyric = memo((props) => {

  const { isSpread } = props;

  const { lyricList } = useSelector(state => ({
    lyricList:state.getIn(["player","lyricList"]),
  }),shallowEqual);

  return (
    <LyricWrapper isSpread={isSpread} length={lyricList.length}>
      {
        lyricList.map((item,index) => {
          return (
            <div className='lineLyric' key={index}>
              {item.content}
            </div>
          )
        })
      }
    </LyricWrapper>
  )
})

export default Lyric;