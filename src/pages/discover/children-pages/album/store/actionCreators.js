import * as actionTypes from './constants';

import { 
  getHotAlbums,
  getAllAlbums
} from '@/services/album';

const changeHotAlbums = (res) => ({
  type:actionTypes.CHANGE_HOT_ALBUMS,
  hotAlbums:res
})

const changeAllAlbums = (res) => ({
  type:actionTypes.CHANGE_ALL_ALBUMS,
  allAlbums:res
})

export const getHotAlbumsAction = () => {
  return dispatch => {
    getHotAlbums().then(res => {
      console.log(res);
      dispatch(changeHotAlbums(res.albums))
    })
  }
}

export const getAllAlbumsAction = () => {
  return dispatch => {
    getAllAlbums().then(res => {
      console.log(res);
      dispatch(changeAllAlbums(res.weekData))
    })
  }
}

