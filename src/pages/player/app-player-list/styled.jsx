import styled from 'styled-components';

export const PlaylistWrapper = styled.div`
  width: 986px;
  height: 300px;
  margin-left: -493px;
  position:fixed;
  left:50%;
  bottom:46px;
  z-index:9999;
  
  .playlist-header{
    padding: 0 5px;
    background-position: 0 0;
    height: 40px;
    &-title{
      position: absolute;
      left: 25px;
      top: 0;
      height: 39px;
      line-height: 39px;
      font-size: 14px;
      font-weight:900;
      color: #e2e2e2;
    }
  }

  .playlist-content{
    overflow: hidden;
    padding: 0 5px;
    display:flex;
    position: absolute;
    left: 0;
    width: 976px;
    height: 260px;
    overflow: hidden;
    background-repeat: repeat-y;
    img{
      position: absolute;
      left: 2px;
      _left: 0;
      top: -360px;
      z-index: 1;
      width: 980px;
      height: auto;
      /* opacity: .2; */
    }
    
    .playlist-left{
      position: absolute;
      left: 2px;
      width: 558px;
      height:260px;
      background: #121212;
      opacity: .9;
      z-index: 4;
      overflow: hidden;

      .playlist-list{
        width: 100%;
        display:flex;
        &:hover{
          background-color:rgba(0,0,0,0.9);
          .songs-operation{
            .songs-operation-wrap{
              display:block;
            }
          }
          span, .songs-duration{
            color:#fff;
          }
        }
        span, .songs-duration{
          color:#ccc;
        }
        .playlist-item{
          padding-left: 10px;
          height: 28px;
          line-height: 28px;
          overflow: hidden;
          cursor: pointer;
        }
        .play-icon{
          width: 10px;
          height: 13px;
          background-position: -182px 0;
          margin-top: 8px;
        }
        .play-name{
          width: 280px;
          color:#fff;
        }
        .songs-operation{
          width:90px;
          .songs-operation-wrap{
            display:none;
            width:80px;
            height:100%;
            .favor{
              display: inline-block;
              vertical-align: middle;
              padding-top:20px;
              width: 18px;
              height: 16px;
              background-position: -297px -268px;
              cursor: pointer;
            }
            .share{
              display: inline-block;
              vertical-align: middle;
              width: 18px;
              height: 16px;
              background-position: 0 -195px;
              cursor: pointer;
              margin-left:3px;
            }
            .down{
              display: inline-block;
              vertical-align: middle;
              width: 18px;
              height: 16px;
              background-position: -81px -174px;
              cursor: pointer;
              margin-left:3px;
            }
            .del{
              display: inline-block;
              vertical-align: middle;
              width: 13px;
              height: 13px;
              background-position: -51px -20px;
              cursor: pointer;
              margin-left:3px;
            }
          }
        }
        .songs-singer{
          width:60px;
        }
        .songs-duration{
          margin-left:10px;
        }
      }
    }

    .playlist-right{
      color:red;
      position: absolute;
      left: 560px;
      z-index: 3;
      width: 420px;
      height:260px;
      background: #121212;
      opacity: .8;
    }
  }
`