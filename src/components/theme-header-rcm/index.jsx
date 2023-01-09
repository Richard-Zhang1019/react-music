import React, { memo } from 'react';

import propTypes from 'prop-types';

import { 
  HeaderWrapper
 } from './style';

const ZXYThemeHeaderRCM = memo(function (props) {

  const { title,keywords } = props

  return (
    <HeaderWrapper className='sprite_02'>
      <div className='left'>
        <h3 className='title'>{title}</h3>
        <div className='keyword'>
         {
            keywords.map((item,index) => {
              return (
                <div key={item} className='item'>
                  <span>{item}</span>
                  <span className='divider'>|</span>
                </div>
              )
            })
         }
        </div>
      </div>
      <div className='right'>
        <span>更多</span>
        <i className='icon sprite_02'></i>
      </div>
    </HeaderWrapper>
  )
});

ZXYThemeHeaderRCM.propTypes = {
  title:propTypes.string.isRequired,
  keywords:propTypes.array
}

ZXYThemeHeaderRCM.defaultProps = {
  keywords:[]
}

export default ZXYThemeHeaderRCM;