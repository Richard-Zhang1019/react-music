import styled from 'styled-components';

export const VideoWrap = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  padding-top:20px;
  .video-item{
    width:159px;
    margin-bottom:40px;
    .item-top{
      position:relative;
      img{
        width:100%;
        height:90px;
        cursor: pointer;
      }
      .duration{
        color:#fff;
        position:absolute;
        bottom:0;
        left:5px;
      }
      .playCount{
        color:#fff;
        position:absolute;
        right:5px;
        top:0;
        span{
          display: inline-block;
          overflow: hidden;
          vertical-align: middle;
          width: 15px;
          height: 10px;
          background-position: -60px -310px;
          margin-right:3px;
        }
      }
    }
    .item-title{
      max-width: 159px; //限定宽度
	    overflow: hidden; //超出的隐藏
	    text-overflow: ellipsis; //超出部分显示省略号
      white-space:nowrap;
      color:#000;
      font-size:14px;
      margin:7px 0px 1px;
      cursor: pointer;
      &:hover{
        text-decoration:underline;
      }
      .mv-icon{
        display: inline-block;
        overflow: hidden;
        vertical-align: middle;
        width: 26px;
        height: 16px;
        background:url(${require('@/assets/img/sprite_icon3.png')}) no-repeat 0 9999px;
        background-position: -270px -480px;
        margin-right:5px;
      }
    }
    .item-author{
      color:#666;
      cursor: pointer;
    }
  }
`