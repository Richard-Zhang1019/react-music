import React, { memo } from 'react';

import { DownloadWrapper } from './styled';

const ZXYDownload = memo(() => {
  return (
    <DownloadWrapper>
      <div className='title'>
        网易云音乐多端下载
      </div>
      <div className='btn sprite'>
        <div className='mac'></div>
        <div className='win'></div>
        <div className='android'></div>
      </div>
      <div className='tip'>同步歌单，随时畅听320k好音乐</div>
    </DownloadWrapper>
  )
})

export default ZXYDownload