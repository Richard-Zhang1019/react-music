import styled from 'styled-components';

export const SongCategoryWrapper = styled.div`
  position: absolute;
  top: 195px;
  left:280px;
  z-index: 5;
  height:385px;
  width: 700px;
  border:rgb(199,199,199) 1px solid;
  border-radius:3px;
  background-color: #fff;
  box-shadow: 0 0 10px rgb(190,190,190);
  .head-icon{
    i{
      position: absolute;
      top: -11px;
      left: 120px;
      display: inline-block;
      width: 24px;
      height: 11px;
      background-position: -48px 0;
      vertical-align: middle;
    }
  }
  .list-head{
    border-bottom:1px solid rgb(230,230,230);
    padding:20px 0 10px 25px;
    .list-head-all{
      background-color:rgb(246,246,246);
      border:1px solid rgb(195,195,195);
      border-radius:3px;
      width: 75px;
      height:26px;
      line-height:26px;
      text-align:center;
      cursor: pointer;
    }
  }
  .list-content{
    .list-content-language{
      height:42px;
      display:flex;
      .language-left{
        border-right:1px solid rgb(230,230,230);
        font-weight:700;
        color:#333;
        width: 95px;
        padding-left:25px;
        padding-top:15px;
        span{
          display: inline-block;
          overflow: hidden;
          vertical-align: middle;
          width: 23px;
          height: 23px;
          background-position: -20px -735px;
          margin-right:8px;
        }
      }
      .language-right{
        padding-top:16px;
        span{
          padding: 0 12px;
          border-right:2px solid #e6e6e6;
          margin: 2px 0;
          cursor: pointer;
          &:hover{
            text-decoration:underline;
          }
        }
      }
    }
    .list-content-style{
      height:64px;
      display:flex;
      .style-left{
        border-right:1px solid rgb(230,230,230);
        font-weight:700;
        color:#333;
        width: 161px;
        padding-left:25px;
        padding-top:15px;
        span{
          display: inline-block;
          overflow: hidden;
          vertical-align: middle;
          width: 23px;
          height: 23px;
          background-position: 0 -60px;
          margin-right:8px;
        }
      }
      .style-right{
        padding-top:16px;
        display:flex;
        flex-wrap:wrap;
        span{
          padding: 0 12px;
          border-right:2px solid #e6e6e6;
          margin: 2px 0;
          cursor: pointer;
          &:hover{
            text-decoration:underline;
          }
        }
      }
    }
    .list-content-scene{
      height:64px;
      display:flex;
      .scene-left{
        border-right:1px solid rgb(230,230,230);
        font-weight:700;
        color:#333;
        width: 96px;
        padding-left:25px;
        padding-top:15px;
        span{
          display: inline-block;
          overflow: hidden;
          vertical-align: middle;
          width: 23px;
          height: 23px;
          background-position: 0 -88px;
          margin-right:8px;
        }
      }
      .scene-right{
        padding-top:16px;
        display:flex;
        flex-wrap:wrap;
        span{
          padding: 0 12px;
          border-right:2px solid #e6e6e6;
          cursor: pointer;
          margin: 2px 0;
          &:hover{
            text-decoration:underline;
          }
        }
      }
    }
    .list-content-emotion{
      height:64px;
      display:flex;
      .emotion-left{
        border-right:1px solid rgb(230,230,230);
        font-weight:700;
        color:#333;
        width: 97px;
        padding-left:25px;
        padding-top:15px;
        span{
          display: inline-block;
          overflow: hidden;
          vertical-align: middle;
          width: 23px;
          height: 23px;
          background-position: 0 -117px;
          margin-right:8px;
        }
      }
      .emotion-right{
        padding-top:16px;
        display:flex;
        flex-wrap:wrap;
        span{
          padding: 0 13px;
          border-right:2px solid #e6e6e6;
          cursor: pointer;
          margin: 2px 0;
          &:hover{
            text-decoration:underline;
          }
        }
      }
    }
    .list-content-theme{
      height:64px;
      display:flex;
      .theme-left{
        border-right:1px solid rgb(230,230,230);
        font-weight:700;
        color:#333;
        width: 135px;
        padding-left:25px;
        padding-top:15px;
        span{
          display: inline-block;
          overflow: hidden;
          vertical-align: middle;
          width: 23px;
          height: 23px;
          background-position: 0 -141px;
          margin-right:8px;
        }
      }
      .theme-right{
        padding-top:16px;
        display:flex;
        flex-wrap:wrap;
        span{
          padding: 0 12px;
          border-right:2px solid #e6e6e6;
          cursor: pointer;
          margin: 2px 0;
          &:hover{
            text-decoration:underline;
          }
        }
      }
    }
  }
`