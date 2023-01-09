import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector,shallowEqual } from 'react-redux';
import { getSizeImage } from '../../../../utils/data-format';

import { getSearchUserAction } from '../../store/actionCreators';

import { UserWrap, InfoIcon } from './styled';

const ZXYSearchUser = memo((props) => {

  const { searchContent,searchUsers } = useSelector(state => ({
    searchContent: state.getIn(["search","searchContent"]),
    searchUsers: state.getIn(["search","searchUsers"])
  }),shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearchUserAction(searchContent))
  },[dispatch,searchContent])

  const highLight = (keyword) => {
    searchUsers.forEach((value,index) => {  
      var reg = new RegExp(keyword,"g");
      value.nickname = value.nickname.replace(reg, `<span style="color: #0c73c2;">${keyword}</span>`);
    })
  }
  highLight(searchContent);

  return (
    <UserWrap>
      {
        searchUsers.slice(0,20).map(item => {
          return (
            <div className='user-item' key={item.userId}>
              <div className='item-image'>
                <img src={getSizeImage(item.avatarUrl,50)} alt="" />
                <span className='image_cover'></span>
              </div>
              <div className='item-info'>
                <div className='info-name'>
                  <span className='name' dangerouslySetInnerHTML={{__html:item.nickname}}></span>
                  <img src={(item.avatarDetail && item.avatarDetail.identityIconUrl) || ''} alt="" />
                  <InfoIcon className='sprite_icon2' gender={item.gender}/>
                </div>
                <div className='info-desc'>{item.signature}</div>
              </div>
              <div className='item-star'>
                <div className='item-star-button sprite_button2'><span>关注</span></div>
              </div>    
              <div className='item-playlist-count'>歌单：{item.djStatus}</div>
              <div className='item-fans'>粉丝：{item.province}</div>
            </div>
          )
        })
      }
    </UserWrap>
  )
})

export default ZXYSearchUser;