import React, { memo, useEffect } from 'react';

import { AllAlbumWrapper } from './styled';
import ZXYAlbumCover from '@/components/album-cover';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getAllAlbumsAction } from '../../store/actionCreators';

const AllAlbums = memo(() => {

  const { allAlbums } = useSelector(state => ({
    allAlbums:state.getIn(["albums","allAlbums"])
  }),shallowEqual)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAlbumsAction());
  },[dispatch])

  return (
    <AllAlbumWrapper>
      <div className='all-album-title'>全部新碟</div>
      <div className='all-album-content'>
      {
        allAlbums.slice(0,35).map(item => {
          return <ZXYAlbumCover key={item.id} info={item} fs='14px'/>
        })
      }
      </div>
    </AllAlbumWrapper>
  )
})

export default AllAlbums