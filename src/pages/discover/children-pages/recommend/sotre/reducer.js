import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  // 轮播图
  topBanners:[],
  // 热门推荐数据
  hotRecommends:[],
  // 新碟上架数据
  newAlbums:[],
  // 飙升榜
  upRanking:[],
  // 热歌榜
  hotRanking:[],
  // 新歌榜
  newRanking:[],
  // 原创榜
  originRanking:[],
})

function reducer(state = defaultState,action) {
  switch(action.type){
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners",action.topBanners);
    case actionTypes.CHANGE_HOT_RECOMMENDS:
      return state.set("hotRecommends",action.hotRecommends);
    case actionTypes.CHANGE_NEW_ALBUMS:
      return state.set("newAlbums",action.newAlbums);
    case actionTypes.CHANGE_UP_RANKING:
      return state.set("upRanking",action.upRanking);
    case actionTypes.CHANGE_HOT_RANKING:
      return state.set("hotRanking",action.hotRanking);
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set("newRanking",action.newRanking);
    case actionTypes.CHANGE_ORIGIN_RANKING:
      return state.set("originRanking",action.originRanking);
    default:
      return state;
  }
}

export default reducer;
