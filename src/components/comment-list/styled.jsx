import styled from 'styled-components';

export const CommentWrapper = styled.div`
  margin-top:120px;
  .send-comment{
    margin-top:20px;
    display:flex;
    .image{
      img{
        width:50px;
        height:50px;
      }
    }
    .send-content{
      margin-left:15px;
      .ant-input{
        font-size:12px;
        border-radius: 2px;
        &:hover{
          border-color:none;
        }
      }
      .send-input{
        width:550px;
        height:70px;
        margin: 0px;
        border: 1px solid rgb(205, 205, 205);
        border-radius: 2px;
        line-height: 19px;
        box-sizing: content-box;
        background-color: #fff;
      }
      .comment-opreation{
        margin-top:10px;
        .smile{
          margin: 0px 10px 0px 0px;
          cursor: pointer;
          display: inline-block;
          vertical-align: middle;
          width: 18px;
          height: 18px;
          background-position: -40px -490px;
        }
        .at{
          margin: 0px 10px 0px 0px;
          cursor: pointer;
          display: inline-block;
          vertical-align: middle;
          width: 18px;
          height: 18px;
          background-position: -60px -490px;
        }
        .comment-button{
          cursor: pointer;
          display: block;
          width: 46px;
          height: 25px;
          background-position: -84px -64px;
          color: rgb(255, 255, 255);
          text-align: center;
          line-height: 25px;
          float: right;
          &:hover{
            text-decoration:none;
          }
        }
      }
    }
  }

  .title{
    display:flex;
    border-bottom:solid rgb(194,12,12) 2px;
    .comment{
      color:#333;
      font-size:20px;
    }
    .count{
      margin-left:20px;
      height:100%;
      line-height:36px;
      color:#666;
      font-size:9px;
    }
  }
  .hotComments{
    margin-top:20px;
    .title{
      font-size:12px;
      color:#333;
      font-weight:900;
      height: 20px;
      border-bottom: 1px solid #cfcfcf;
      padding-bottom:10px;
    }
    .comment-item{
      padding: 15px 0;
      border-top: 1px dotted #ccc;
      display:flex;
      .comment-content{
        margin-left:10px;
        width:100%;
        .comment-top{
          img{
            width:13px;
            height:13px;
            margin: 0px 5px;
          }
          .username{
            color: #0c73c2;
          }
        }
        .comment-bottom{
          margin-top:15px;
          display:flex;
          justify-content:space-between;
          .time{
            font-size:12px;
            color:#999;
          }
          .operation{
            span{
              text-decoration: none;
              color: #666;
              cursor: pointer;
              margin: 0px 10px;
              i{
                margin-right:2px;
                display: inline-block;
                overflow: hidden;
                width: 15px;
                height: 15px;
                background-position: -150px 0;
              }
            }
          }
        }
      }
    }
  }
`