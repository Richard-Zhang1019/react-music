import React, { memo, useEffect } from 'react';
import { useDispatch,useSelector,shallowEqual } from 'react-redux';

import { SimilarWrapper } from './styled';
import { getSimilarSongsAction } from '../../store/actionCreators';
import { getSongDetailAction } from '@/pages/player/store';

const ZXYSimilar = memo((props) => {

  const { id } = props;

  const { similarSongs } = useSelector(state => ({
    similarSongs:state.getIn(["player","similarSongs"]),
  }),shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSimilarSongsAction(id))
  },[dispatch,id])

  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  }

  return (
    <SimilarWrapper>
      <div className='title'>
        相似歌曲
      </div>
      <div className='similar'>
        {
          similarSongs.map((item,index) => {
            return (
              <div className='main' key={index}>
                <div className='info'>
                  <div className='songName'>{item.name}</div>
                  <div className='singer'>{item.artists[0].name}</div>
                </div>
                <div className='btn'>
                  <span onClick={e => playMusic(item)} className='btn-player sprite_icon3'> </span>
                  <span className='btn-add sprite_icon3'> </span>
                </div>
              </div>
            )
          })
        }
      </div>
    </SimilarWrapper>
  )
})

export default ZXYSimilar;