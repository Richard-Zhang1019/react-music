import React, { memo } from 'react';

import { ArtistWrapper } from './style';
import ZXYArtistCategory from './child-components/artist-category';
import ZXYArtistList from './child-components/artist-list'

export default memo(function ZXYArtist() {
  return (
    <ArtistWrapper className='wrap-v2'>
      <ZXYArtistCategory/>
      <ZXYArtistList/>
    </ArtistWrapper>
  )
});
