import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector,shallowEqual } from 'react-redux';
import { formatDate } from '../../../../utils/data-format';

import { getSearchSongsAction } from '../../store/actionCreators';
import { getSongDetailAction } from '@/pages/player/store';
import { SearchWrap } from './styled'

const ZXYSearchSinger = memo(() => {

  const { searchSongs, searchContent } = useSelector(state => ({
    searchSongs: state.getIn(["search","searchSongs"]),
    searchContent: state.getIn(["search","searchContent"])
  }),shallowEqual);
  console.log(searchSongs);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearchSongsAction(searchContent));
  },[dispatch,searchContent]);

  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  }

  const highLight = (keyword) => {
    searchSongs.forEach((value,index) => {  
      var reg = new RegExp(keyword,"g");
      console.log(value.alias);
      value.name = value.name.replace(reg, `<span style="color: #0c73c2;">${keyword}</span>`); 
      value.artists[0].name = value.artists[0].name.replace(reg, `<span style="color: #0c73c2;">${keyword}</span>`); 
      value.album.name = value.album.name.replace(reg, `<span style="color: #0c73c2;">${keyword}</span>`); 
    })
  }
  highLight(searchContent);

  return (
    <SearchWrap>
      <div className='search-content'>
        {
          searchSongs.slice(0,20).map((item,index) => {
            return (
              <div className='search-content-item' key={index}>
                <div className='songs-play' onClick={ e => playMusic(item) }>
                  <span className='sprite_table'></span>
                </div>
                <div className='songs-name'>
                  <span dangerouslySetInnerHTML={{__html:item.name}}></span>
                  <span className='songs-name-tip' dangerouslySetInnerHTML={{__html:item.alias[0]}}></span>
                </div>
                <div className='songs-operation'>
                  <div className='songs-operation-wrap'>
                    <span className='sprite_icon2 addto'></span>
                    <span className='sprite_02 favor'></span>
                    <span className='sprite_table share'></span>
                    <span className='sprite_table down'></span>
                  </div>
                </div>
                <div className='songs-singer'><span dangerouslySetInnerHTML={{__html:item.artists[0].name}}></span></div>
                <div className='songs-album'>《<span dangerouslySetInnerHTML={{__html:item.album.name}}></span>》</div>        
                <div className='songs-duration'>{formatDate(item.duration,'mm:ss')}</div>
              </div>
            )
          })
        }
      </div>
    </SearchWrap>
  )
})

export default ZXYSearchSinger;