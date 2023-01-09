import * as actionTypes from './constants';

import { 
  getSearchSong,
  getSearchSinger,
  getSearchAlbum,
  getSearchVideo,
  getSearchLyric,
  getSearchPlaylist,
  getSearchSounddj,
  getSearchUser
} from '@/services/search';
import { getSearchUserPlaylistCount } from '../../../services/search';

const changeSearchContent = (keywords) => ({
  type:actionTypes.CHANGE_SEARCH_CONTENT,
  searchContent:keywords
})

const changeSearchSongs = (res) => ({
  type:actionTypes.CHANGE_SEARCH_SONGS,
  searchSongs:res
})

const changeSearchSingers = (res) => ({
  type:actionTypes.CHANGE_SEARCH_SINGERS,
  searchSingers:res
})

const changeSearchAlbums = (keywords) => ({
  type:actionTypes.CHANGE_SEARCH_ALBUMS,
  searchAlbums:keywords
})

const changeSearchVideo = (res) => ({
  type:actionTypes.CHANGE_SEARCH_VIDEOS,
  searchVideos:res
})
const changeSearchLyric = (res) => ({
  type:actionTypes.CHANGE_SEARCH_LYRICS,
  searchLyrics:res
})
const changeSearchPlaylist = (res) => ({
  type:actionTypes.CHANGE_SEARCH_PLAYLISTS,
  searchPlaylists:res
})
const changeSearchSounddj = (res) => ({
  type:actionTypes.CHANGE_SEARCH_SOUNDDJS,
  searchSounddjs:res
})
const changeSearchUser = (res) => ({
  type:actionTypes.CHANGE_SEARCH_USERS,
  searchUsers:res
})

export const getSearchContentAction = (keywords) => {
  return dispatch => {
    dispatch(changeSearchContent(keywords));
  }
}

export const getSearchSongsAction = (keywords) => {
  return dispatch => {
    getSearchSong(keywords).then(res => {
      dispatch(changeSearchSongs(res.result.songs));
    })
  }
}

export const getSearchSingersAction = (keywords) => {
  return dispatch => {
    getSearchSinger(keywords).then(res => {
      dispatch(changeSearchSingers(res.result.artists));
    })
  }
}

export const getSearchAlbumAction = (keywords) => {
  return dispatch => {
    getSearchAlbum(keywords).then(res => {
      dispatch(changeSearchAlbums(res.result.albums));
    })
  }
}

export const getSearchVideoAction = (keywords) => {
  return dispatch => {
    getSearchVideo(keywords).then(res => {
      dispatch(changeSearchVideo(res.result.videos));
    })
  }
}
export const getSearchLyricAction = (keywords) => {
  return dispatch => {
    getSearchLyric(keywords).then(res => {
      dispatch(changeSearchLyric(res.result.songs));
    })
  }
}
export const getSearchPlaylistAction = (keywords) => {
  return dispatch => {
    getSearchPlaylist(keywords).then(res => {
      dispatch(changeSearchPlaylist(res.result.playlists));
    })
  }
}

export const getSearchSounddjAction = (keywords) => {
  return dispatch => {
    getSearchSounddj(keywords).then(res => {
      dispatch(changeSearchSounddj(res.result.djRadios));
    })
  }
}
export const getSearchUserAction = (keywords) => {
  return dispatch => {
    getSearchUser(keywords).then(res => {
      let newArray = [...res.result.userprofiles]
      for(let item of newArray){
        getSearchUserPlaylistCount(item.userId).then(response => {
          item.playlistCount = response.profile.playlistCount;
          item.followeds = response.profile.followeds;
        })
      }
      dispatch(changeSearchUser(newArray));
    })
  }
}