import React, { memo } from 'react';

import { AlbumWrapper } from './style';
import ZXYHotAlbums from './child-components/hot-album'
import ZXYAllAlbums from './child-components/all-album'

export default memo(function ZXYAlbum() {
  return (
    <AlbumWrapper className='wrap-v2'>
      <ZXYHotAlbums/>
      <ZXYAllAlbums/>
    </AlbumWrapper>
  )
});
