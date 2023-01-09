import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getDjRankAction } from '../../store/actionCreators';
import { getSizeImage } from '@/utils/data-format'

import { DjRankWrapper } from './styled';

const ZXYDjRank = memo(() => {

  const { djRank, currentId } = useSelector(state => ({
    djRank:state.getIn(['djradio','djRank']),
    currentId: state.getIn(["djradio", "currentId"])
  }),shallowEqual)
  console.log(djRank);
  const djRankList = djRank || [];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDjRankAction(currentId));
  },[dispatch,currentId])

  return (
    <DjRankWrapper className='wrap-v3'>
      <div className='djrank-head'>
        <span>电台排行榜</span>
        <span className='hotest'>最热电台</span>
      </div>
      <div className='djrank-content'>
        {
          djRankList.map(item => {
            return (
              <div className='djrank-item' key={item.id}>
                <div className='item-image'>
                  <img src={getSizeImage(item.intervenePicUrl,120)} alt="" />
                </div>
                <div className='item-info'>
                  <div className='item-info-name'>{item.name}</div>
                  <div className='item-info-nickname'>
                    <span className='sprite_icon2'></span>{item.dj.nickname}
                  </div>
                  <div className='item-info-detail'>
                    <span>共{item.programCount}期</span>
                    <span>订阅{item.subCount}次</span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </DjRankWrapper>
  )
})

export default ZXYDjRank;