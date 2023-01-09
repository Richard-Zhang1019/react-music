import React, { memo,useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getSizeImage } from '@/utils/data-format';

import ZXYLyric from './children-cpn/lyric';
import ZXYDownload from '@/components/download'
import ZXYPlayerSongBar from '@/components/player-song-bar';
import ZXYCommentList from '@/components/comment-list';
import ZXYSimilar from './children-cpn/similar';
import { 
  PlayerWrapper,
  PlayerLeft,
  PlayerRight,
  PlayerImage,
  PlayerInfo
} from './style';

export default memo(function ZXYPlayer() {

  const [isSpread, setisSpread] = useState(false);

  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(["player","currentSong"]),
  }),shallowEqual);
  console.log(currentSong);

  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <div className='player-left-content'>
            <PlayerImage>
              <img className='image' src={getSizeImage(currentSong.al.picUrl,130)} alt="" />
              <span className='image-cover'></span>
              <div className='image-link'>
                <i className='sprite_icon2'></i>
                <span>生成外链播放器</span>
              </div>
            </PlayerImage>
            <PlayerInfo isSpread={isSpread}>
              <div className='header'>
                <i className='sprite_icon2'></i>
                <div className='header-title'>
                  <div className='header-title-main'>
                    {currentSong.name}
                  </div>
                  <div className='header-title-other'>
                    {currentSong.alia[0]}
                  </div>
                </div>
              </div>
              <div className='middle'>
                <div className='detail'>
                  <span>歌手：</span>
                  <NavLink to="">
                    {currentSong.ar[0].name}
                  </NavLink>
                </div>
                <div className='detail'>
                  <span>所属专辑：</span>
                  <NavLink to="">
                    {currentSong.al.name}
                  </NavLink>
                </div>
              </div>
    
              <ZXYPlayerSongBar favorTitle="收藏"
                                shareTitle="分享"
                                downloadTitle="下载"
                                commentTitle="(167366)" />
              
              <ZXYLyric isSpread={isSpread} />
              <button className='btn-speard' onClick={e => setisSpread(!isSpread)}>
                { isSpread ? "收起": "展开" }
                <i className='sprite_icon2'></i>
              </button>

            </PlayerInfo>
          </div>
          <div className='commit-bug'><span>报错</span></div>
          
          <ZXYCommentList id={currentSong.id} />
        </PlayerLeft>

        <PlayerRight>
          <ZXYSimilar id={currentSong.id} />
          <ZXYDownload/>
          <div className='userwiki'>
            <div className='title'>用户wiki</div>
            <div className='link'>
              <div className='link-one'>
                <img src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/13138582886/9567/5afa/307c/a6ba8934ef3b36208786e4445e054e04.png" alt="" />
                <span>补充或修改歌曲资料</span>
              </div>
              <div className='link-two'>
                <img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/13138667740/2d69/e968/aac8/79d601b88b5bde7f850f090db9a3f820.png" alt="" />
                <span>补充或修改歌曲资料</span>
              </div>
            </div>
          </div>
        </PlayerRight>

      </div>
    </PlayerWrapper>
  )
});
