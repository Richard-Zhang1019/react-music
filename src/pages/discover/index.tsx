import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom'

import { discoverMenu } from '@/common/local-data'

import { DiscoverWrapper, TopMenu } from './style'

//获取子路由对象 在props里
export default memo(function ZXYDiscover(props) {
  const { route } = props

  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {discoverMenu.map((item, index) => {
            return (
              <div className="item" key={item.title}>
                <NavLink exact to={item.link}>
                  {item.title}
                </NavLink>
              </div>
            )
          })}
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
