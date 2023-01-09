import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { formatDate, formatMonthDay, getSizeImage } from '../../utils/data-format';
import { getSongDetailAction } from '@/pages/player/store';

import { RankingContentWrapper } from './style';
import ZXYPlayerSongBar from '../player-song-bar';

const ZXYRanking = memo((props) => {

  const { playList } = props;
  const list = playList.tracks? playList.tracks: [];
  const dispatch = useDispatch();
  const playMusic = (item) => { 
    dispatch(getSongDetailAction(item.id));
  }

  return (
    <RankingContentWrapper>
      <div className='content-head'>
        <div className='image'>
          <img src={getSizeImage(playList.coverImgUrl,150)} alt="" />
        </div>
        <div className='detail'>
          <div className='title'>{playList.name}</div>
          <div className='info'>
            <span className='icon sprite_icon2'></span>
            最近更新：{formatMonthDay(playList.trackUpdateTime)}
          </div>
          <ZXYPlayerSongBar subscribed={`(${playList.subscribedCount})`}
                            shareCount={`(${playList.shareCount})`}
                            commentCount={`(${playList.commentCount})`} 
                            />
        </div>
      </div>
      <div className='content-list'>
        <div className='content-list-head'>
          <div className='name'>歌曲列表</div>
          <div className='count'>{playList.trackCount}首歌</div>
          <div className='times'>播放：<span>{playList.playCount}</span>次</div>
        </div>
        <div className='border'>
          <div className='content-list-wrap'>
            <div className='content-list-title'>
              <div className='content-list-title-rank'></div>
              <div className='content-list-title-headline'>标题</div>
              <div className='content-list-title-duration'>时长</div>
              <div className='content-list-title-singer'>歌手</div>
            </div>
            <div className='content-list-list'>
              {
                list.slice(0,3).map((item,index) => {
                  return (
                    <div className='content-list-list-item' key={index}>
                      <div className='item-rank'>
                        <span>{index + 1}</span>
                      </div>
                      <div className='item-headline'>
                        <img src={getSizeImage(item.al.picUrl,50)} alt="" />
                        <span className='play sprite_table' onClick={e => playMusic(item)}></span>
                        <span className='song-name'>{item.name}</span>
                        <span className='song-album'>{}</span>
                      </div>
                      <div className='item-duration'>{formatDate(item.dt,'mm:ss')}</div>
                      <div className='item-singer'>{item.ar[0].name}</div>
                    </div>
                  )
                })
              }
              {
                list.slice(3).map((item,index) => {
                  return (
                    <div className='content-list-list-item2' key={index}>
                      <div className='item-rank2'>
                        <span>{index + 4}</span>
                      </div>
                      <div className='item-headline2'>
                        <span className='play2 sprite_table' onClick={e => playMusic(item)}></span>
                        <span className='song-name2'>{item.name}</span>
                        <span className='song-album2'>{}</span>
                      </div>
                      <div className='item-duration2'>{formatDate(item.dt,'mm:ss')}</div>
                      <div className='item-singer2'>{item.ar[0].name}</div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </RankingContentWrapper>
  )
})

export default ZXYRanking;