import styled from 'styled-components';

export const SoundDjWrap = styled.div`
  margin-top:30px;
  .sounddj-title{
    font-weight:bold;
    width:100%;
    height:24px;
    border-bottom:rgb(218,218,218) 1px solid;
  }
  .sounddj-content{
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    .content-item{
      margin: 20px 0px;
      .info-name{
        margin-top:10px;
        font-size:14px;
        height: 25px;
        width: 150px;
        line-height:25px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
      }
      .info-author{
        color:#999;
        span{
          color:#333;
        }
        .info-gender{
          
        }
      }
    }
  }
`

export const InfoGender = styled.span`
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