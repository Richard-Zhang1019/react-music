import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { SongsWrapper } from './style';
import SongHeader from './child-components/song-header';
import SongList from './child-components/song-list'
import { getCategory } from './store/actionCreators'

export default memo(function ZXYSongs() {

  useSelector(state => ({
    category:state.getIn(["songs", "category"])
  }),shallowEqual)
  // console.log(category);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  },[dispatch])

  return (
    <SongsWrapper className='wrap-v2'>
      <SongHeader/>
      <SongList/>
    </SongsWrapper>
  )
});
