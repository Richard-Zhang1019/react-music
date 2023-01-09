import React, { memo,useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { RecommendWrapper } from "./style";

import ZXYThemeHeaderRCM from '@/components/theme-header-rcm';
import ZXYSongsCover from '@/components/songs-cover';
import { getHotRecommendAction } from '../../sotre/actionCreators';

export default memo(function ZXYHotRecommend() {

  const dispatch = useDispatch();
  const { hotRecommends } = useSelector(state => ({
    hotRecommends:state.getIn(["recommend","hotRecommends"])
  }),shallowEqual)

  useEffect(() => {
    dispatch(getHotRecommendAction(8))
  }, [dispatch]);
  
  
  return (
    <RecommendWrapper>
      <ZXYThemeHeaderRCM title='热门推荐' keywords={["华语","流行","摇滚","民谣","电子"]}/>
      <div className='recommend-list'>
        {
          hotRecommends.map((item,index) => {
            return <ZXYSongsCover key={item.id} info={item} i={1}/>
          })
        }
      </div>
    </RecommendWrapper>
  )
})
