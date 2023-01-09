import * as actionTypes from './constants';
// import { PER_PAGE_NUMBER } from './constants';

import {
  getSongCategory,
  getSongCategoryList
} from "@/services/songs";
import { 
  handleSongsCategory
} from "@/utils/handle-data";

const changeCategoryAction = (res) => ({
  type: actionTypes.CHANGE_CATEGORY,
  category: res
})

const changeSongListAction = (res) => ({
  type: actionTypes.CHANGE_CATEGORY_SONGS,
  categorySongs: res
})

export const changeCurrentCategoryAction = (name) => ({
  type: actionTypes.CHANGE_CURRENT_CATEGORY,
  currentCategory: name
})

export const getCategory = () => {
  return dispatch => {
    getSongCategory().then(res => {
      const categoryData = handleSongsCategory(res);
      dispatch(changeCategoryAction(categoryData))
    })
  }
}

export const getSongList = (name) => {
  return (dispatch, getState) => {
    // 1.获取currentCategory
    // const name = getState().getIn(["songs", "currentCategory"]);
    const prarms = name?name:'全部'

    // 2.获取数据
    getSongCategoryList(prarms).then(res => {
      // console.log(res);
      dispatch(changeSongListAction(res.playlists));
    })
  }
}
