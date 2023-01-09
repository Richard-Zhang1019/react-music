import styled from 'styled-components';

export const UserWrap = styled.div`
  margin-top:20px;
  
  .user-item{
    padding:1px;
    height: 62px;
    display:flex;
    margin:auto 0;
    &:nth-child(even){
      background-color:#f7f7f7;
    }
    &:hover{
      background-color: rgb(242,242,242);
      padding:0;
      border:1px solid rgb(225,225,225);
    }
    .item-image{
      padding:5px 10px;
      position: relative;
      cursor: pointer;
      img{
        z-index:1;
      }
      span{
        position: absolute;
        top: 5px;
        left: 10px;
        width: 50px;
        height: 50px;
        z-index:2;
        background-position: -160px 0;
      }
    }
    .item-info{
      padding:5px 10px;
      width: 480px;
      .info-name{
        margin-top:8px;
        font-size:14px;
        .name{
          cursor: pointer;
          &:hover{
            text-decoration:underline;
          }
        }
        img{
          margin-left:5px;
          width: 15px;
          height: 15px;
        }
      }
      .info-desc{
        color:#999;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
      }
    }

    .item-star{
      width: 96px;
      padding:5px 10px;
      margin:auto 0;
      .item-star-button{
        width: 64px;
        height: 27px;
        line-height:27px;
        background-position: 0 -990px;
        cursor: pointer;
        span{
          margin-left:25px;
        }
      }
    }

    .item-playlist-count{
      width: 116px;
      margin:auto 0;
      color:#999;
      margin-left:20px;
    }
    .item-fans{
      width: 116px;
      margin:auto 0;
      color:#999;
    }
  }
`

export const InfoIcon = styled.span`
  display: inline-block;
  width: 14px;
  height: 15px;
  overflow: hidden;
  vertical-align: middle;
  margin-left:5px;
  background-position: -70px ${props => {
    switch(props.gender){
      default:
        return -20;
      case 2:
        return 0;
    }
  }}px;
`