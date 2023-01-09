import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  getTops
} from "./store/actionCreators"

import ZXYRankingLeft from './child-components/ranking-left';
import ZXYRankingRight from './child-components/ranking-right';
import { 
  RankingWrapper,
  RankingLeft,
  RankingRight
} from './style';

export default memo(function ZXYRanking() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTops());
  }, [dispatch]);

  return (
    <RankingWrapper className='wrap-v2'>
      <RankingLeft>
        <ZXYRankingLeft/>
      </RankingLeft>
      {/* <RankingRight> */}
        {/* <ZXYRankingRight/> */}
      {/* </RankingRight> */}
    </RankingWrapper>
  )
});
