import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getNewDjAction } from '../../store/actionCreators';
import { getSizeImage } from '@/utils/data-format'

import { NewDjWrapper } from './styled';

const ZXYNewDj = memo(() => {

  const { currentId,newDj } = useSelector(state => ({
    currentId: state.getIn(["djradio", "currentId"]),
    newDj:state.getIn(['djradio','newDj'])
  }),shallowEqual)
  const newDjList = newDj || [];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewDjAction(currentId));
  },[dispatch,currentId])

  return (
    <NewDjWrapper className='wrap-v3'>
      <div className='newdj-head'>
        <span>优秀新电台</span>
      </div>
      <div className='newdj-content'>
        {
          newDjList.map(item => {
            return (
              <div className='newdj-content-item' key={item.id}>
                <img src={getSizeImage(item.intervenePicUrl)} alt="" />
                <div className='item-name'>{item.name}</div>
                <div className='item-rcmdtext'>{item.rcmdtext}</div>
              </div>
            )
          })
        }
      </div>
    </NewDjWrapper>
  )
})

export default ZXYNewDj;