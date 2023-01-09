import React, { memo} from 'react';

import ZXYTopBanner from './child-components/top-banner';
import ZXYHotRecommend from './child-components/hot-recommend';
import ZXYNewAlbum from './child-components/new-album';
import ZXYRecommendRanking from './child-components/recommend-ranking';
import ZXYHotSinger from './child-components/hot-singer';
import ZXYHotDj from './child-components/hot-dj'

import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style';

function ZXYRecommend(props) {

  return (
    <RecommendWraper>
      <ZXYTopBanner/>
      <Content className='wrap-v2'>

        <RecommendLeft>
          <ZXYHotRecommend/>
          <ZXYNewAlbum/>
          <ZXYRecommendRanking/>
        </RecommendLeft>

        <RecommendRight>

          <div className='login sprite_02'>
            <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
            <span className='sprite_02'>用户登录</span>
          </div>

          <ZXYHotSinger />

          <div className='apply'>
            <span><i>申请称为网易音乐人</i></span>
          </div>

          <ZXYHotDj/>
        </RecommendRight>

      </Content>
    </RecommendWraper>
  )
}

export default memo(ZXYRecommend);