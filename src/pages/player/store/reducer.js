import { Map } from 'immutable';
import * as actionTypes from './constants';

const defaultState= Map({
  // 播放列表
  playList:[],

  // 当前播放歌曲索引值
  currentSongIndex:0,

  // 当前播放歌曲
  currentSong:{},

  /**
   * 播放顺序 
   *   顺序播放 0
   *   随机播放 1
   *   单曲循环 2 
   */
  sequence:0,

  //歌词列表
  lyricList:[],

  // 当前正在播放的歌词索引值
  currentLyricIndex:0,

  // 当前正在播放歌曲的相似歌曲
  similarSongs:[]
})

function reducer(state = defaultState,action) {
  switch(action.type){
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong",action.currentSong);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList",action.playList);
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex",action.index);
    case actionTypes.CHANGE_SEQUENCE:
      return state.set("sequence",action.sequence);
    case actionTypes.CHANGE_LYRIC_LIST:
      return state.set("lyricList",action.lyricList);
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricIndex",action.index);
    case actionTypes.CHANGE_SIMILAR_SONGS:
      return state.set("similarSongs",action.similarSongs);
    default:
      return state;
  }
}

export default reducer;
