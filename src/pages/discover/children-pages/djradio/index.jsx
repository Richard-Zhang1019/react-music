import React, { memo } from 'react';

import { DjradioWrapper } from './style';

import ZXYDjRank from './child-components/djRank';
import ZXYHeadCategory from './child-components/headCategory';
import ZXYNewDj from './child-components/newDj';

export default memo(function ZXYDjradio() {
  return (
    <DjradioWrapper className='wrap-v2'>
      <ZXYHeadCategory/>
      <ZXYNewDj/>
      <ZXYDjRank/>
    </DjradioWrapper>
  )
});
