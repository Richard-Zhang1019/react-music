import { Map } from 'immutable';
import * as actionTypes from './constants';

const defaultState= Map({
  commentList:[],
  hotCommentList:[]
})

function reducer(state = defaultState,action) {
  switch(action.type){
    case actionTypes.CHANGE_COMMENT_LIST:
      return state.set("commentList",action.commentList);
    case actionTypes.CHANGE_HOT_COMMENT_LIST:
      return state.set("hotCommentList",action.hotCommentList);
    default:
      return state;
  }
}

export default reducer;
