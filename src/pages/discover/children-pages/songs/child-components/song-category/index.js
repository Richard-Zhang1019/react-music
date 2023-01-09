import React, { memo, useEffect } from 'react';

import { SongCategoryWrapper } from './styled';

import { changeCurrentCategoryAction, getCategory, getSongList } from '../../store/actionCreators';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

const SongCategory = memo(() => {
  
  const { category } = useSelector(state => ({
    category:state.getIn(["songs", "category"])
  }),shallowEqual)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  },[dispatch])

  const handleCategoryItem = (name) => {
    console.log(name);
    dispatch(getSongList(name));
    dispatch(changeCurrentCategoryAction(name));
  }

  const chooseAll = () => {
    dispatch(changeCurrentCategoryAction('全部'));
    dispatch(getSongList('全部'));
  }

  return (
    <SongCategoryWrapper>
      <div className='head-icon'>
        <i className='sprite_icon'></i>
      </div>
      <div className='list-head'>
        <div className='list-head-all' onClick={e => chooseAll()}>全部分类</div>
      </div>
      <div className='list-content'>
        <div className='list-content-language'>
          <div className='language-left'>
            <span className='sprite_icon2'></span>
            {category[0].name}
          </div>
          <div className='language-right'>
            {
              category[0].subs.map((item,index) => {
                return (
                  <span onClick={e => handleCategoryItem(item.name)} key={index}>{item.name}</span>
                )
              })
            }
          </div>
        </div>
        <div className='list-content-style'>
          <div className='style-left'>
          <span className='sprite_icon2'></span>
            {category[1].name}
          </div>
          <div className='style-right'>
            {
              category[1].subs.map((item,index) => {
                return (
                  <span onClick={e => handleCategoryItem(item.name)} key={index}>{item.name}</span>
                )
              })
            }
          </div>
        </div>
        <div className='list-content-scene'>
          <div className='scene-left'>
            <span className='sprite_icon2'></span>
              {category[2].name}
          </div>
          <div className='scene-right'>
            {
              category[2].subs.map((item,index) => {
                return (
                  <span onClick={e => handleCategoryItem(item.name)} key={index}>{item.name}</span>
                )
              })
            }
          </div>
        </div>
        <div className='list-content-emotion'>
          <div className='emotion-left'>
            <span className='sprite_icon2'></span>
              {category[3].name}
          </div>
          <div className='emotion-right'>
            {
              category[3].subs.map((item,index) => {
                return (
                  <span onClick={e => handleCategoryItem(item.name)} key={index}>{item.name}</span>
                )
              })
            }
          </div>
        </div>
        <div className='list-content-theme'>
          <div className='theme-left'>
            <span className='sprite_icon2'></span>
              {category[4].name}
          </div>
          <div className='theme-right'>
            {
              category[4].subs.map((item,index) => {
                return (
                  <span onClick={e => handleCategoryItem(item.name)} key={index}>{item.name}</span>
                )
              })
            }
          </div>
        </div>
      </div>
    </SongCategoryWrapper>
  )
})

export default SongCategory;