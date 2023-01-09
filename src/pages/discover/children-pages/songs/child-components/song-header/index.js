import React, { memo, useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { SongHeaderWrapper } from './styled';
import SongCategory from '../song-category';

const SongHeader = memo(() => {

  const [chooseShow, setchooseShow] = useState(false);

  const { currentCategory } = useSelector(state => ({
    currentCategory: state.getIn(["songs", "currentCategory"])
  }), shallowEqual);

  return (
    <SongHeaderWrapper>
      <div className='head-title'>{ currentCategory }</div>
      <div className='head-choose' onClick={e => setchooseShow(!chooseShow)}>
        <i>选择分类<em className='sprite_icon2'></em></i>
        <CSSTransition in={chooseShow}
                       timeout={0}
                       unmountOnExit={true}
                       appear>
          <SongCategory />
        </CSSTransition>
      </div>
      <div className='head-hot'>热门</div>
    </SongHeaderWrapper>
  )
})

export default SongHeader;