import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  // 热门主播
  hotDj:[],
  // 分类
  categoryList:[],
  // 优秀新电台
  newDj:[],
  // 电台排行榜
  djRank:[],
  currentId:0
})

function reducer(state = defaultState,action) {
  switch(action.type){
    case actionTypes.CHANGE_HOT_DJ:
      return state.set("hotDj",action.hotDj);
    case actionTypes.CHANGE_CATEGORY_LIST:
      return state.set("categoryList",action.categoryList);
    case actionTypes.CHANGE_NEW_DJ:
      return state.set("newDj",action.newDj);
    case actionTypes.CHANGE_DJ_RANK:
      return state.set("djRank",action.djRank);
    case actionTypes.CHANGE_CURRENT_ID:
      return state.set('currentId',action.currentId)
    default:
      return state;
  }
}

export default reducer;
