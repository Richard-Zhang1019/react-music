import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector,shallowEqual } from 'react-redux';
import { getCount, getSizeImage } from '../../../../utils/data-format';

import { getSearchPlaylistAction } from '../../store/actionCreators';

import { PlaylistWrap } from './styled';

const ZXYSearchPlaylist = memo((props) => {
  
  const { searchContent,searchPlaylists } = useSelector(state => ({
    searchContent: state.getIn(["search","searchContent"]),
    searchPlaylists: state.getIn(["search","searchPlaylists"])
  }),shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearchPlaylistAction(searchContent))
  },[dispatch,searchContent])

  const highLight = (keyword) => {
    searchPlaylists.forEach((value,index) => {  
      var reg = new RegExp(keyword,"g");
      value.name = value.name.replace(reg, `<span style="color: #0c73c2;">${keyword}</span>`); 
      value.creator.nickname = value.creator.nickname.replace(reg, `<span style="color: #0c73c2;">${keyword}</span>`); 
    })
  }
  highLight(searchContent);

  return (
    <PlaylistWrap>
      {
        searchPlaylists.slice(0,20).map(item => {
          return (
            <div className='playlist-item' key={item.id}>
              <div className='item-play-icon sprite_table'></div>
              <div className='item-image'>
                <img src={getSizeImage(item.coverImgUrl,50)} alt="" />  
              </div>
              <div className='item-name'>
                <span dangerouslySetInnerHTML={{__html:item.name}}></span>
                <div className='item-operate'>
                  <span className='add sprite_icon2'></span>
                  <span className='favor sprite_table'></span>
                  <span className='share sprite_table'></span>
                </div>
              </div>
              <div className='item-number'>{item.trackCount}首</div>
              <div className='item-author'>by <span dangerouslySetInnerHTML={{__html:item.creator.nickname}}></span></div>
              <div className='item-star'>收藏：{getCount(item.bookCount)}</div>
              <div className='item-playcount'>收听：{getCount(item.playCount)}</div>
            </div>
          )
        })
      }
    </PlaylistWrap>
  )
})

export default ZXYSearchPlaylist;