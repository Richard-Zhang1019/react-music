import { getSongDetail,getLyric,getSimilarSong } from '@/services/player';

import * as actionTypes from './constants';
import { getRandomNumber } from '@/utils/math-utils';
import { parseLyric } from '@/utils/parse-lyric';

const changeCurrentSongAction = (currentSong) => ({
  type:actionTypes.CHANGE_CURRENT_SONG,
  currentSong
});

const changePlayListAction = (playList) => ({
  type:actionTypes.CHANGE_PLAY_LIST,
  playList
});

const changeCurrentSongIndexAction = (index) => ({
  type:actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index
});

const changeLyricListAction = (lyricList) => ({
  type:actionTypes.CHANGE_LYRIC_LIST,
  lyricList
})

const changeSimilarSongsAction = (similarSongs) => ({
  type:actionTypes.CHANGE_SIMILAR_SONGS ,
  similarSongs
})

export const getSimilarSongsAction = (id) => {
  return dispatch => {
    getSimilarSong(id).then(res => {
      dispatch(changeSimilarSongsAction(res.songs));
    })
  }
}

export const changeCurrentIndexAndSongAction = (tag) => {
  return (dispatch,getState) => {
    const playList = getState().getIn(["player","playList"]);
    const sequence = getState().getIn(["player","sequence"]);
    let currentSongIndex = getState().getIn(["player","currentSongIndex"]);

    switch(sequence){
      case 1:  // 随机播放
        let randomIndex = getRandomNumber(playList.length);
        while(randomIndex === currentSongIndex){
          randomIndex = getRandomNumber(playList.length);
        }
        currentSongIndex = randomIndex;
        break;
      default: // 顺序播放和单曲循环
        currentSongIndex += tag;
        if(currentSongIndex >= playList.length -1) 
          currentSongIndex = 0;
        if(currentSongIndex < 0)
          currentSongIndex = playList.length -1;
    }
    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongAction(currentSong));
    dispatch(changeCurrentSongIndexAction(currentSongIndex));

    // 请求歌曲歌词
    dispatch(getLyricAction(currentSong.id));
  }
}

export const changeCurrentLyricIndexAction = (index) => ({
  type:actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  index
})

export const changeSequenceAction = (sequence) => ({
  type:actionTypes.CHANGE_SEQUENCE,
  sequence
})

export const getSongDetailAction = (ids) => {
  return (dispatch,getState) => {
    // 根据ids查找播放列表是否存在该歌曲
    const playList = getState().getIn(["player","playList"]);
    // 存在会返回该歌曲索引 不存在返回-1
    const songIndex = playList.findIndex(song => song.id === ids);

    let song = null;
    if(songIndex !== -1){ // 找到歌曲
      dispatch(changeCurrentSongIndexAction(songIndex));
      song = playList[songIndex];
      dispatch(changeCurrentSongAction(song));
      dispatch(getLyricAction(ids));
    }else{ // 未找到歌曲
      // 请求歌曲
      getSongDetail(ids).then(res => {
        song = res.songs && res.songs[0];
        if(!song) return;
        // 将请求的新歌曲放入播放列表
        const newPlayList = [...playList];
        newPlayList.push(song);
        // 更新redux中的数据
        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
        dispatch(changeCurrentSongAction(song));

        // 请求歌曲歌词
        dispatch(getLyricAction(ids));
      })
    }
  }
}

export const getLyricAction = (id) => {
  return dispatch => {
    getLyric(id).then(res => {
      const lyric = res.lrc.lyric;
      const lyricList = parseLyric(lyric)
      dispatch(changeLyricListAction(lyricList));
    })
  }
}
