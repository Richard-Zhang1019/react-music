import styled from 'styled-components';

export const SearchWrap = styled.div`
  margin-top:20px;
  .search-content{
    .search-content-item{
      &:hover{
        .songs-operation{
          .songs-operation-wrap{
            display:block;
          }
        }
      }
      display:flex;
      height:44px;
      padding: 10px 14px 8px 14px;
      border: 1px solid #fff;
      color:#333;
      &:nth-child(even){
        background-color: rgb(247,247,247);
      }
      &:hover{
        background-color: rgb(242,242,242);
      }
      .songs-play{
        height: 17px;
        width: 17px;
        margin-left:5px;
        span{
          display: inline-block;
          width: 17px;
          height: 17px;
          margin-right: 15px;
          cursor: pointer;
          background-position: 0 -103px;
          &:hover{
            background-position: 0 -128px;
          }
        }
      }
      .songs-name{
        margin-left:5px;
        position: relative;
        padding-right: 25px;
        width: auto;
        max-width: 100%;
        height: 20px;
        width: 370px;
        span{
          cursor: pointer;
          &:hover{
            text-decoration:underline;
          }
        }
        .songs-name-tip{
          color:#aeaeae;
          margin-left:5px;
          &:hover{
            text-decoration:none;
          }
        }
      }
      .songs-operation{
        width:96px;
        height:100%;
        .songs-operation-wrap{
          display:none;
          width:96px;
          height:100%;
          .addto{
            display: inline-block;
            vertical-align: middle;
            width: 13px;
            height: 13px;
            padding-top:15px;
            background-position: 0 -700px;
            cursor: pointer;
          }
          .favor{
            display: inline-block;
            vertical-align: middle;
            padding-top:20px;
            width: 18px;
            height: 16px;
            margin-left:7px;
            background-position: -297px -268px;
            cursor: pointer;
          }
          .share{
            display: inline-block;
            vertical-align: middle;
            width: 18px;
            height: 16px;
            margin-left:7px;
            background-position: 0 -195px;
            cursor: pointer;
          }
          .down{
            display: inline-block;
            vertical-align: middle;
            width: 18px;
            height: 16px;
            margin-left:7px;
            background-position: -81px -174px;
            cursor: pointer;
          }
        }
      }
      .songs-singer{
        margin-left:10px;
        width: 15%;
        margin-right: 12px;
        span{
          cursor: pointer;
        }
      }
      .songs-album{
        width: 18%;
        margin-right: 12px;
        min-height: 16px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        span{
          cursor: pointer;
        }
      }
      .songs-duration{
        float:right;
      }
    }
  }
`