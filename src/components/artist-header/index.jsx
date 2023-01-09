import React, { memo } from 'react';

import { ArtistHeaderWrap } from './styled';

const ZXYArtistHeader = memo((props) => {

  let { title } = props;

  if(title === '推荐歌手'){
    title = '入驻歌手'
  }

  return (
    <ArtistHeaderWrap>
      <div className='title'>{title}</div>
      <div className='right'></div>
    </ArtistHeaderWrap>
  )
})

export default ZXYArtistHeader;