import React, { memo } from 'react';

import {
  getSizeImage
} from "@/utils/data-format";

import {
  AlbumWrapper
} from "./style";


export default memo(function ZXYAlbumCover(props) {

  const { info, size = 130, width = 153, bgp = '-845px', fs = '12px'}= props;

  return (
    <AlbumWrapper size={size} width={width} bgp={bgp} fs={fs}>
      <div className='album-image'>
        <img src={getSizeImage(info.picUrl,size)} alt="" />
        <span className="cover image_cover"></span>
      </div>
      <div className='album-info'>
        <div className="name text-nowrap" dangerouslySetInnerHTML={{__html:info.name}}></div>
        <div className="artist text-nowrap" dangerouslySetInnerHTML={{__html:info.artist.name}}></div>
      </div>
    </AlbumWrapper>
  )
})
