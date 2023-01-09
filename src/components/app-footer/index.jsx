import React, { memo, Fragment } from 'react';

import { footerLinks, footerImages } from "@/common/local-data";

import {
  AppFooterWrapper,
  FooterLeft,
  FooterRight,
} from './style';

export default memo(function HYAppFooter() {
  return (
  <AppFooterWrapper>
    <div className="wrap-v2 content">
      <FooterLeft className="left">
        <div className="link">
          {
            footerLinks.map(item => {
              return (
                <Fragment key={item.title}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                  <span className="line">|</span>
                </Fragment>
              )
            })
          }
        </div>
        <div className="info">
          <a href='https://beian.miit.gov.cn/' target="_blank">津ICP备2022006344号-1</a>
          <a href="https://beian.miit.gov.cn/" target="_blank">
            工业和信息化部备案管理系统网站
          </a>
        </div>
      </FooterLeft>
      <FooterRight className="right">
        {
          footerImages.map((item, index) => {
            return (
              <li className="item" key={item.link}>
                <a className="link" href={item.link} rel="noopener noreferrer" target="_blank"> </a>
                <span className="title">{item.title}</span>
              </li>
            )
          })
        }
      </FooterRight>
    </div>
  </AppFooterWrapper>
  )
})
