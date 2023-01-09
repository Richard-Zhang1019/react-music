import React, { memo } from 'react';
import { useSelector, shallowEqual } from "react-redux";

import Ranking from '@/components/ranking';
import { RankingRgihtWrapper } from './styled';

const ZXYRankingRight = memo(() => {

  const { playList } = useSelector(state => ({
    playList: state.getIn(["ranking", "playList"]),
  }), shallowEqual);

  return (
    <RankingRgihtWrapper>
      <Ranking playList={playList}/>
    </RankingRgihtWrapper>
  )
})

export default ZXYRankingRight;