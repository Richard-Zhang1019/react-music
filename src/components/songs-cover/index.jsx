import React, { memo } from 'react';

import { SongsCoverWrapper } from './style';
import { getCount,getSizeImage } from '@/utils/data-format';

export default memo(function ZXYSongsCover(props) {
  
  const { info, right, i } = props;
  const picurl = info.picUrl || info.coverImgUrl;
  let author;
  if(i === 1){
    author = info.copywriter;
  } else if(i === 2){
    author = info.creator.nickname;
  }

  return (
    <SongsCoverWrapper right={right}>
      <div className='cover-top'>
        <img src={getSizeImage(picurl,140)} alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">
        {info.name}
      </div>
      <div className="cover-source text-nowrap">
        by { author }
      </div>
    </SongsCoverWrapper>
  )
});
