import React, { memo,useEffect,useRef,useCallback,useState } from 'react';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getTopBannerAction } from '../../sotre/actionCreators';

import { Carousel } from 'antd';
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style';

export default memo(function ZXYTopBanner() {

   //组件和redux关联：获取数据和进行操作
   const dispatch = useDispatch();
   const { topBanners } = useSelector(state => ({
     topBanners:state.getIn(["recommend","topBanners"])
   }),shallowEqual)
 
   //发送网络请求
   useEffect(() => {
     dispatch(getTopBannerAction());
   },[dispatch]);

   const bannerRef = useRef();

   //记录当前轮播图index
   const [currentIndex, setCurrentIndex] = useState(0);

   //轮播图切换时容器外部背景图片跟着切换
   const bannerChange = useCallback((from,to) => {
    setCurrentIndex(to)
   },[]);

   const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20");

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className='banner wrap-v2'>
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              topBanners.map((item,index) => {
                return (
                  <div className='banner-item' key={item.imageUrl}>
                    <img className='image' src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        
        <BannerRight></BannerRight>
        <BannerControl>
          <button className='btn left' onClick={e => bannerRef.current.prev()}></button>
          <button className='btn right' onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
});
