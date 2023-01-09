import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux';

import ZXYArtistHeader from '@/components/artist-header';
import ZXYAlphaList from './child-components/alpha-list';
import ZXYArtistItem from './child-components/artist-item'
import { ArtistListWrapper } from './styled';

const ArtistList = memo(() => {

  const { currentType,artistList } = useSelector(state => ({
    currentType:state.getIn(['artist','currentType']),
    artistList:state.getIn(['artist','artistList'])
  }),shallowEqual)

  return (
    <ArtistListWrapper>
      <ZXYArtistHeader title={currentType.name} />
      <ZXYAlphaList/>
      <div className='artist-list'>
        {
          artistList.map((item, index) => {
            return <ZXYArtistItem item={item} index={index}/>
          })
        }
      </div>
    </ArtistListWrapper>
  )

})

export default ArtistList;