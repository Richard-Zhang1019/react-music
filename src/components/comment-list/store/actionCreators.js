import { getSongsComment} from '@/services/comment';

import * as actionTypes from './constants';

const changeCommentListAction = (commentList) => ({
  type:actionTypes.CHANGE_COMMENT_LIST,
  commentList
})

const changeHotCommentListAction = (hotCommentList) => ({
  type:actionTypes.CHANGE_HOT_COMMENT_LIST,
  hotCommentList
})

export const getCommentListcAction = (id) => {
  return dispatch => {
    getSongsComment(id).then(res => {
      const commentList = res.comments;
      const hotCommentList = res.hotComments;
      dispatch(changeCommentListAction(commentList));
      dispatch(changeHotCommentListAction(hotCommentList));
    })
  }
}
