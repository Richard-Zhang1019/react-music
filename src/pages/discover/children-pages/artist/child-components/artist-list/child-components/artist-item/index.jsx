import React, { memo } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import { getSizeImage } from '../../../../../../../../utils/data-format';

import { ArtistItemWrap } from './styled'

const ZXYArtistItem = memo((props) => {

  const { item, index } = props;

  const history = useHistory();
  const toDetail = (id) => {
    history.push({
      pathname: '/artistDetail',
      state: {
        id
      }
    })
  }

  return (
    <ArtistItemWrap>
      {
        index < 10 && (
          <div key={index} className='image' onClick={e => toDetail(item.id)}>
            <img src={getSizeImage(item.img1v1Url,130)} alt="" />
            <span></span>
          </div>
        )
      }
      <div className='info'>
        {item.name}
        <span className='sprite_icon2'></span>
      </div>
    </ArtistItemWrap>
  )
})

export default ZXYArtistItem;