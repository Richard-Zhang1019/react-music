import * as actionTypes from './constants';

import { 
  getHotDj,
  getDjRadioCatelist,
  getNewDj,
  getDjRank
} from '@/services/djradio';

const changeHotDj = (res) => ({
  type:actionTypes.CHANGE_HOT_DJ,
  hotDj:res
})

const changeCategoryList = (res) => ({
  type:actionTypes.CHANGE_CATEGORY_LIST,
  categoryList:res
})

const changeNewDj = (res) => ({
  type:actionTypes.CHANGE_NEW_DJ,
  newDj:res
})

const changeDjRank = (res) => ({
  type:actionTypes.CHANGE_DJ_RANK,
  djRank:res
})

const changeCurrnetId = (res) => ({
  type:actionTypes.CHANGE_CURRENT_ID,
  currentId:res
})

export const getHotDjAction = () => {
  return dispatch => {
    getHotDj().then(res => {
      dispatch(changeHotDj(res.data.list));
    })
  }
}

export const getCategoryListAction = () => {
  return dispatch => {
    getDjRadioCatelist().then(res => {
      dispatch(changeCategoryList(res.categories))
      dispatch(changeCurrnetId(res.categories[0].id))
    })
  }
}

export const getCurrentIdAction = (id) => {
  return dispatch => {
    console.log(id);
    dispatch(changeCurrnetId(id))
  }
}

export const getNewDjAction = (id) => {
  return dispatch => {
    getNewDj(id).then(res => {
      dispatch(changeNewDj(res.djRadios.slice(0,5)));
    })
  }
}

export const getDjRankAction = (id) => {
  return dispatch => {
    getDjRank(id).then(res => {
      dispatch(changeDjRank(res.djRadios.slice(0,20)));
    })
  }
}