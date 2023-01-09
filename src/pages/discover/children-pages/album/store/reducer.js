import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  hotAlbums: [],
  allAlbums: []
})

export default function reducer(state = defaultState,action){
  switch(action.type){
    case actionTypes.CHANGE_HOT_ALBUMS:
      return state.set("hotAlbums",action.hotAlbums)
    case actionTypes.CHANGE_ALL_ALBUMS:
      return state.set("allAlbums",action.allAlbums)
    default:
      return state;
  }
}