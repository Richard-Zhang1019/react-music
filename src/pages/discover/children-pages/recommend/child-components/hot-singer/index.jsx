import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getHotSingerAction } from '../../../artist/store/actionCreators';
import { getSizeImage } from '@/utils/data-format'

import { Wrapper } from './styled';

const ZXYHotSinger = memo(() => {

  const { hotSinger } = useSelector(state => ({
    hotSinger:state.getIn(["artist","hotSinger"])
  }),shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotSingerAction());
  },[dispatch])

  return (
    <Wrapper>
      <div className='title'>
        <span>热门歌手</span>
        <NavLink to="/discover/artist">查看全部 &gt;</NavLink>
      </div>
      {
        hotSinger.slice(0,5).map((item,index) => {
          return (
            <div key={index} className='singer'>
              <div className='image'>
                <img src={getSizeImage(item.img1v1Url,62)} alt="" />
              </div>
              <div className='info'>
                <div className='singer-name'>{item.name}</div>
                <div className='singer-detail'>{item.alias[0]}</div>
              </div>
            </div>
          )
        })
      }
    </Wrapper>
  )
})

export default ZXYHotSinger;