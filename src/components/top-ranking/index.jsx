import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { getSizeImage } from '@/utils/data-format';
import { getSongDetailAction } from '@/pages/player/store';

import { TopRankingWrapper } from './style';

export default memo(function ZXYTopRanking(props) {

  const { info } = props;
  const { tracks = []} = info;
  console.log(info);

  const dispatch = useDispatch();

  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  }

  return (
    <TopRankingWrapper>
      <div className='header'>
        <div className='image'>
          <img src={getSizeImage(info.coverImgUrl,)} alt="" />
          <span className='image_cover'>{info.name}</span>
        </div>
        <div className='info'>
          <span>{info.name}</span>
          <div>
            <button className="btn sprite_02 play"></button>
            <button className='btn sprite_02 favor'></button>
          </div>
        </div>
      </div>
      <div className='list'>
        {
          tracks.slice(0,10).map((item,index) => {
            return (
              <div key={item.id} className='list-item'>
                <div className='rank'>{index + 1}</div>
                <div className='info'>
                  <span className="name text-nowrap">{item.name}</span>
                  <div className='operate'>
                    <button className='btn sprite_02 play' 
                            onClick={ e => playMusic(item) }></button>
                    <button className='btn sprite_icon2 addto'></button>
                    <button className='btn sprite_02 favor'></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='footer'>
        <span>查看更多 &gt;</span>
      </div>
    </TopRankingWrapper>
  )
});
