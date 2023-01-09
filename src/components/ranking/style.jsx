import styled from 'styled-components';

export const RankingContentWrapper = styled.div`
  padding:40px;
  .content-head{
    display:flex;
    .image{
      padding:3px;
      border:1px solid rgb(204,204,204);
    }
    .detail{
      margin-left:30px;
      .title{
        margin-top:10px;
        color:#333;
        font-size:20px;
      }
      .info{
        margin: 0 0 20px;
        line-height: 35px;
        color:#666;
        .icon{
          display: inline-block;
          overflow: hidden;
          width: 13px;
          height: 13px;
          background-position: -18px -682px;
          margin-right:6px;
        }
      }
    }
  }
  .content-list{
    margin-top:40px;
    &-head{
      display:flex;
      height: 33px;
      .name{
        font-size: 20px;
        line-height: 28px;
      }
      .count{
        margin: 9px 0 0 20px;
        color: #666;
      }
      .times{
        margin-left: auto;
        color: #666;
        margin-top: 5px;
        span{
          color: #c20c0c;
          font-weight: bold;
        }
      }
    }
    .border{
      border-top:rgb(194,12,12) 2px solid;
      .content-list-wrap{
        width: 100%;
        border: 1px solid rgb(217,217,217);
        border-top:none;
        .content-list-title{
          height: 39px;
          line-height:39px;
          font-size:12px;
          color:#666;
          background-color: #f7f7f7;
          display:flex;
          border-bottom:2px solid rgb(217,217,217);
          &-rank{
            width:77px;
          }
          &-headline{
            flex:1;
            border-left:1px solid rgb(217,217,217);
            padding: 0px 10px;
          }
          &-duration{
            width: 91px;
            padding: 0px 10px;
            border-left:1px solid rgb(217,217,217);
          }
          &-singer{
            width:24%;
            padding: 0px 10px;
            border-left:1px solid rgb(217,217,217);
          }
        }
        .content-list-list{

          .content-list-list-item{
            height: 70px;
            display:flex;
            padding:10px;
            &:nth-child(odd){
              background-color: #f7f7f7;
            }
            &:nth-child(even){
              background-color: #fff;
            }
            .item-rank{
              width:77px;
              color:#999;
              line-height:50px;
              padding-left:10px;
            }
            .item-headline{
              flex:1;
              color:#333;
              img{
                cursor: pointer;
              }
              .play{
                margin-left:15px;
                margin-right:8px;
                display:inline-block;
                vertical-align:middle;
                width: 17px;
                height: 17px;
                cursor: pointer;
                background-position: 0 -103px;
              }
              .song-name{
                cursor: pointer;
                &:hover{
                  text-decoration:underline;
                }
              }
            }
            .item-duration{
              padding-top:15px;
              padding-left:15px;
              width:91px;
            }
            .item-singer{
              padding-top:15px;
              padding-left:15px;
              width:24%;
              cursor: pointer;
              &:hover{
                text-decoration:underline;
              }
            }
          }
          .content-list-list-item2{
            height: 30px;
            display:flex;
            padding:0 10px;
            &:nth-child(odd){
              background-color: #f7f7f7;
            }
            &:nth-child(even){
              background-color: #fff;
            }
            .item-rank2{
              width:77px;
              color:#999;
              line-height:30px;
              padding-left:10px;
            }
            .item-headline2{
              flex:1;
              color:#333;
              line-height:30px;
              .play2{
                margin-right:8px;
                display:inline-block;
                vertical-align:middle;
                width: 17px;
                height: 17px;
                cursor: pointer;
                background-position: 0 -103px;
              }
              .song-name2{
                cursor: pointer;
                &:hover{
                  text-decoration:underline;
                }
              }
            }
            .item-duration2{
              line-height:30px;
              padding-left:15px;
              width:91px;
            }
            .item-singer2{
              line-height:30px;
              padding-left:15px;
              width:24%;
            }
          }
          
        }
      }
    }
  }
`
