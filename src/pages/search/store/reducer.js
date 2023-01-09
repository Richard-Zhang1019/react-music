import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  searchContent:'',
  searchSongs:[],
  searchSingers:[],
  searchAlbums:[],
  searchVideos:[],
  searchLyrics:[],
  searchPlaylists:[],
  searchSounddjs:[],
  searchUsers:[]
})

function reducer(state = defaultState,action) {
  switch(action.type){
    case actionTypes.CHANGE_SEARCH_CONTENT:
      return state.set("searchContent",action.searchContent);
    case actionTypes.CHANGE_SEARCH_SONGS:
      return state.set("searchSongs",action.searchSongs);
    case actionTypes.CHANGE_SEARCH_SINGERS:
      return state.set("searchSingers",action.searchSingers);
    case actionTypes.CHANGE_SEARCH_ALBUMS:
      return state.set("searchAlbums",action.searchAlbums);
    case actionTypes.CHANGE_SEARCH_VIDEOS:
      return state.set("searchVideos",action.searchVideos);
    case actionTypes.CHANGE_SEARCH_LYRICS:
      return state.set("searchLyrics",action.searchLyrics);
    case actionTypes.CHANGE_SEARCH_PLAYLISTS:
      return state.set("searchPlaylists",action.searchPlaylists);
    case actionTypes.CHANGE_SEARCH_SOUNDDJS:
      return state.set("searchSounddjs",action.searchSounddjs);
    case actionTypes.CHANGE_SEARCH_USERS:
      return state.set("searchUsers",action.searchUsers);
    default:
      return state;
  }
}

export default reducer;
