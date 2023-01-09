import React, { memo, useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';

import { 
  getCategoryListAction, 
  getCurrentIdAction 
} from '../../store/actionCreators';

import { Carousel } from 'antd';
import { 
  CategoryListWrapper, 
  CategoryItemImage,
  CategoryContent 
} from './styled'

const ZXYHeadCategory = memo(() => {

  const carouselRef = useRef();

  const { categoryList, currentId } = useSelector(state => ({
    categoryList:state.getIn(['djradio','categoryList']),
    currentId: state.getIn(["djradio", "currentId"])
  }),shallowEqual)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryListAction());
  },[dispatch])

  const changeId = (id) => {
    dispatch(getCurrentIdAction(id))
  }

  return (
    <CategoryListWrapper >
      <div className="arrow arrow-left" onClick={e => carouselRef.current.prev()}></div>
      <CategoryContent>
        <Carousel dots={{className: "dots"}} ref={carouselRef}>
          <div className='carousel-one'>
            {
              categoryList.map((item) => {
                return (
                  <div key={item.id} 
                       className={classnames("one-list-item", {"active": currentId === item.id})}
                       onClick={e => changeId(item.id)}>
                    <CategoryItemImage className="image" imgUrl={item.picWebUrl} />
                    <span>{item.name}</span>
                  </div>
                )
              })
            }
          </div>
          <div className='carousel-two'>
            <div className='item1'>
              <div></div>
              <span>常见问题</span>
            </div>
            <div className='item2'>   
              <div></div>    
              <span>我要做主播</span>
            </div>
          </div>
        </Carousel>
      </CategoryContent>
      <div className="arrow arrow-right" onClick={e => carouselRef.current.next()}></div>
    </CategoryListWrapper>
  )
})

export default ZXYHeadCategory;