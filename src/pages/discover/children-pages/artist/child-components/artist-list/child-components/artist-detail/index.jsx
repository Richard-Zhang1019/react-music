import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import { getArtistDetailAction } from '../../../../store/actionCreators';

import { ArtistDetailWrapper } from './styled';

const ArtistDetailList = memo(() => {

  // const { currentType,artistList } = useSelector(state => ({
  //   currentType:state.getIn(['artist','currentType']),
  //   artistList:state.getIn(['artist','artistList'])
  // }),shallowEqual)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArtistDetailAction(2116));
  }, [dispatch])
  

  const location = useLocation();
  
  console.log(location.state.id);

  return (
    <ArtistDetailWrapper>
     { location.state.id }
    </ArtistDetailWrapper>
  )

})

export default ArtistDetailList;