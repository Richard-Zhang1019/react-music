import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getHotDjAction } from '../../../djradio/store/actionCreators';
import { getSizeImage } from '@/utils/data-format'

import { Wrapper } from './styled';

const ZXYHotDj = memo(() => {

  const { hotDj } = useSelector(state => ({
    hotDj:state.getIn(["djradio","hotDj"])
  }),shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotDjAction());
  },[dispatch])

  return (
    <Wrapper>
      <div className='title'>
        <span>热门主播</span>
        <NavLink to="/discover/artist">查看全部 &gt;</NavLink>
      </div>
      {
        hotDj.slice(0,5).map((item,index) => {
          return (
            <div key={index} className='singer'>
              <div className='image'>
                <img src={getSizeImage(item.avatarUrl,40)} alt="" />
              </div>
              <div className='info'>
                <div className='singer-name'>{item.nickName}</div>
                <div className='singer-detail'>粉丝数：{item.score}</div>
              </div>
            </div>
          )
        })
      }
    </Wrapper>
  )
})

export default ZXYHotDj;