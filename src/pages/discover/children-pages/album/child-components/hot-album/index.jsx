import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getHotAlbumsAction } from '../../store/actionCreators';

import { HotAlbumWrapper } from './styled';
import ZXYAlbumCover from '@/components/album-cover';

const HotAlbums = memo(() => {

  const { hotAlbums } = useSelector(state => ({
    hotAlbums:state.getIn(['albums','hotAlbums'])
  }),shallowEqual)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotAlbumsAction());
  },[dispatch])

  return (
    <HotAlbumWrapper>
      <div className='hot-album-title'>热门新碟</div>
      <div className='hot-album-content'>
        {
          hotAlbums.slice(0,10).map(item => {
            return (
              <ZXYAlbumCover key={item.id} info={item} fs='14px'/>
            )
          })
        }
      </div>
    </HotAlbumWrapper>
  )
})

export default HotAlbums;