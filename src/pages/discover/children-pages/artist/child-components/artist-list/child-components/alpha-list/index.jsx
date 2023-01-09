import React, { memo, useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import classNames from 'classnames';

import { singerAlphas } from '@/utils/handle-data';
import { getArtistListAction } from '../../../../store/actionCreators';

import { AlphaListWrap } from './styled'

const ZXYAlplaList = memo(() => {

  const [currentAlpha, setCurrentAlpha] = useState("-1");

  const { currentType, currentArea } = useSelector(state => ({
    currentType:state.getIn(['artist','currentType']),
    currentArea:state.getIn(['artist','currentArea'])
  }),shallowEqual)
  console.log(currentType,currentArea);

  const dispatch = useDispatch();
  
  useEffect(() => {
    setCurrentAlpha("-1");
  }, [currentType,currentArea]);
  useEffect(() => {
    dispatch(getArtistListAction(currentArea, currentType.type, currentAlpha));
  }, [dispatch,currentType,currentArea,currentAlpha]);

  return (
    <AlphaListWrap hasTop={currentArea !== -1}>
      {
        currentArea !== -1 && singerAlphas.map((item,index) => {
          let fake;
          const isActive = currentAlpha === item;
          if(item === "0") 
            fake = "其他";
          if(item === "-1") 
            fake = "热门";
          return (
            <div key={item}
                 className={classNames('item',{"active":isActive})}>
              <span onClick={e => setCurrentAlpha(item)}>
                { fake|| item.toUpperCase() }
              </span>
            </div>
          )
        })
      }
    </AlphaListWrap>
  )
})

export default ZXYAlplaList;