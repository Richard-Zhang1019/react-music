import React, { memo } from 'react';

import { FocusWrapper } from './styled';

export default memo(function ZXYFocus() {
  return (
    <FocusWrapper className='wrap-v2'>
      <div className='focus-content sprite_focus'></div>
    </FocusWrapper>
  )
});
