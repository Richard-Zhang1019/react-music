import React, { memo,useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import { Wrapper } from './styled';
import { getSearchContentAction } from './store/actionCreators';

const ZXYSearch = memo((props) => {

  const {route} = props;
  const [inputValue, setinputValue] = useState();

  const { searchContent } = useSelector(state => ({
    searchContent: state.getIn(["search","searchContent"]),
  }),shallowEqual);
  
  const onChange = (e) => {
    setinputValue(e.target.value);
  }

  let history = useHistory();
  const dispatch = useDispatch();
  const handleKeyUp = (e) => {
    if(e.keyCode === 13){
      history.push({
        state:{ keywords:inputValue }
      });
      dispatch(getSearchContentAction(inputValue));
    }
  }

  const handleSearchButton = () => {
    dispatch(getSearchContentAction(inputValue));
  }

  return (
    <Wrapper className='wrap-v2'>
      <div className='search-wrap sprite'>
        <input onChange={onChange} onKeyUp={e => handleKeyUp(e)} className='search-input' type="text" />
        <span onClick={e => handleSearchButton()}></span>
      </div>
      <div className='info'>
        搜索"{searchContent}"，找到{}首歌曲
      </div>
      <div className='search-result'>
        <ul className='search-result-head sprite_tab'>
          <li><NavLink to="/search/songs" activeClassName="search-link sprite_tab">单曲</NavLink></li>
          <li><NavLink to="/search/singer" activeClassName="search-link sprite_tab">歌手</NavLink></li>
          <li><NavLink to="/search/album" activeClassName="search-link sprite_tab">专辑</NavLink></li>
          <li><NavLink to="/search/video" activeClassName="search-link sprite_tab">视频</NavLink></li>
          <li><NavLink to="/search/lyric" activeClassName="search-link sprite_tab">歌词</NavLink></li>
          <li><NavLink to="/search/playlist" activeClassName="search-link sprite_tab">歌单</NavLink></li>
          <li><NavLink to="/search/sounddj" activeClassName="search-link sprite_tab">声音主播</NavLink></li>
          <li><NavLink to="/search/user" activeClassName="search-link sprite_tab">用户</NavLink></li>
        </ul>
        <div className='search-result-content'>
          {renderRoutes(route.routes)}
        </div>
      </div>
    </Wrapper>
  )
})

export default ZXYSearch;