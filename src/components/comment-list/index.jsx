import React, { memo,useEffect } from 'react';
import { useDispatch,shallowEqual, useSelector } from 'react-redux';

import { CommentWrapper } from './styled'
import { Input } from 'antd';

import { getCommentListcAction } from './store/actionCreators';
import { 
  getSizeImage,
  formatDate 
} from '@/utils/data-format';

const ZXYCommentList = memo((props) => {

  const { id } = props;
  const { TextArea } = Input;

  const { 
    hotCommentList,
    commentList
   } = useSelector(state => ({
    hotCommentList: state.getIn(["comment","hotCommentList"]),
    commentList: state.getIn(["comment","commentList"])
  }),shallowEqual);
  const dispatch = useDispatch();

  const onChange = (e) => {
    console.log(e.target.value);
  }

  useEffect(() => {
    dispatch(getCommentListcAction(id));
  },[dispatch,id]);

  return (
    <CommentWrapper>
      <div className='title'>
        <div className='comment'>评论</div>
        <div className='count'>共{}条评论</div>
      </div>

      <div className='send-comment'>
        <div className='image'>
          <img src="https://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50" alt="" />
        </div>
        <div className='send-content'>
          <TextArea className='send-input' 
                    onChange={onChange}
                    defaultValue="评论"
                    bordered={false}
                    autoSize={false}
                    maxLength={140} />
          <div className='comment-opreation'>
            <i className='smile sprite_icon2'></i>
            <i className='at sprite_icon2'></i>
            <span className='comment-button sprite_button2'>评论</span>
          </div>
        </div>
      </div>

      <div className='hotComments'>
        <div className='title'>精彩评论</div>
        {
          hotCommentList.map((item,index) => {
            return (
              <div className='comment-item' key={index}>
                <div className='image'>
                  <img src={getSizeImage(item.user.avatarUrl,50)} alt="" />
                </div>
                <div className='comment-content'>
                  <div className="comment-top">
                    <span className='username'>{item.user.nickname}</span>
                    <img src={ (item.user.avatarDetail && item.user.avatarDetail.identityIconUrl) } alt="" />
                    ：{item.content}
                  </div>
                  <div className='comment-bottom'>
                    <div className='time'>
                      {item.timeStr} {formatDate(item.time,"hh:mm")}
                    </div>
                    <div className='operation'>
                     <span><i className='sprite_icon3'></i> ({item.likedCount})</span>|<span>回复</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='hotComments'>
        <div className='title'>最新评论</div>
        {
          commentList.map((item,index) => {
            return (
              <div className='comment-item' key={index}>
                <div className='image'>
                  <img src={getSizeImage(item.user.avatarUrl,50)} alt="" />
                </div>
                <div className='comment-content'>
                  <div className="comment-top">
                    <span className='username'>{item.user.nickname}</span>
                    <img src={ (item.user.avatarDetail && item.user.avatarDetail.identityIconUrl) } alt="" />
                    ：{item.content}
                  </div>
                  <div className='comment-bottom'>
                    <div className='time'>
                      {item.timeStr} {formatDate(item.time,"hh:mm")}
                    </div>
                    <div className='operation'>
                     <span><i className='sprite_icon3'></i> ({item.likedCount})</span>|<span>回复</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </CommentWrapper>
  )
})

export default ZXYCommentList