import React, { memo,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ZXYThemeHeaderRCM from '@/components/theme-header-rcm';
import ZXYTopRanking from '@/components/top-ranking';
import { RankingWrapper } from './style';
import { getTopListAction } from '../../sotre/actionCreators';

export default memo(function ZXYRecommendRanking() {

  const { upRanking,newRanking,originRanking } = useSelector(state =>( {
    upRanking:state.getIn(["recommend","upRanking"]),
    newRanking:state.getIn(["recommend","newRanking"]),
    originRanking:state.getIn(["recommend","originRanking"]),
  }))

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch]);
  
  return (
    <div>
      <RankingWrapper>
        <ZXYThemeHeaderRCM title='榜单'/>
        <div className='tops'>
          {/* <ZXYTopRanking info={originRanking}/>
          <ZXYTopRanking info={upRanking}/>
          <ZXYTopRanking info={newRanking}/> */}
        </div>
      </RankingWrapper>
    </div>
  )
});
