import styled from 'styled-components';

export const PlaylistWrap = styled.div`
  margin-top:20px;
  .playlist-item{
    height:62px;
    line-height:62px;
    display:flex;
    padding:1px;
    &:nth-child(even){
      background-color:#f7f7f7;
    }
    &:hover{
      background-color: rgb(242,242,242);
      padding:0;
      border:1px solid rgb(225,225,225);
    }
    &:hover{
      .item-name{
        .item-operate{
          display:block;
        }
      }
    } 
    .item-play-icon{
      width: 17px;
      height: 17px;
      cursor: pointer;
      background-position: 0 -103px;
      margin: auto 20px;
    }
    .item-image{
      margin-right:20px;
    }
    .item-name{
      cursor: pointer;
      display:flex;
      justify-content:space-between;
      width:340px;
      &:hover{
        text-decoration:underline;
      }
      .item-operate{
        display:none;
        margin-right:20px;
        .add{
          display:inline-block;
          width: 13px;
          height: 13px;
          overflow: hidden;
          vertical-align: middle;
          background-position: 0px -700px;
        }
        .favor{
          display:inline-block;
          width: 18px;
          height: 16px;
          overflow: hidden;
          vertical-align: middle;
          background-position: 0 -174px;
          margin:0 3px;
        }
        .share{
          display:inline-block;
          width: 18px;
          height: 16px;
          overflow: hidden;
          vertical-align: middle;
          background-position: 0 -195px;
        }
      }
    }
    .item-number{
      color:#999;
      width:35px;
    }
    .item-author{
      margin-left:10px;
      width: 190px;
      color:#333;
      cursor: pointer;
      &:hover{
        text-decoration:underline;
      }
    }
    .item-star{
      color:#999;
      width: 78px;
    }
    .item-playcount{
      color:#999;
      margin-left:20px;
      width: 85px;
      height:62px;
      line-height:62px;
      white-space:pre-wrap;
    }
  }
`