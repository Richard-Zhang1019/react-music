import styled from 'styled-components';

export const DjRankWrapper = styled.div`
  margin-top: 30px;
  .djrank-head{
    height: 40px;
    border-bottom:2px solid rgb(194,12,12);
    span{
      font-size:24px;
      color:#333;
    }
    .hotest{
      color:#c2020c;
      font-size:12px;
      float:right;
      margin-top:15px;
    }
  }
  .djrank-content{
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    .djrank-item{
      width: 435px;
      height: 160px;
      padding: 20px 0;
      border-bottom: 1px solid #e7e7e7;
      display:flex;
      .item-image{
        img{
          cursor: pointer;
        }
      }
      .item-info{
        margin-left:20px;
        .item-info-name{
          height: 64px;
          line-height:64px;
          font-weight:bold;
          font-size:18px;
          cursor: pointer;
          &:hover{
            text-decoration:underline;
          }
        }
        .item-info-nickname{
          span{
            margin-right:10px;
            width: 14px;
            height: 15px;
            display: inline-block;
            overflow: hidden;
            vertical-align: middle;
            background-position: -50px -300px;
          }
          cursor: pointer;
          &:hover{
            text-decoration:underline;
          }
        }
        .item-info-detail{
          color:#999;
          margin-top:5px;
          span{
            margin-right:10px;
          }
        }
      }
    }
  }
`