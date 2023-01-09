import styled from 'styled-components';

export const Wrapper = styled.div`
  margin:0 auto;
  width:85%;
  margin-top:30px;
  .title{
    display:flex;
    justify-content:space-between;
    border-bottom:1px solid #ccc;
    padding-bottom:5px;
    span{
      font-size:12px;
      font-weight:900;
      color:#333;
    }
    a{
      color:#666;
    }
  }
  .singer{
    width:100%;
    margin-top:10px;
    display:flex;
    .info{
      width: 150px;
      padding-left: 14px;
      border-left: none;
      .singer-name{
        font-size:12px;
        color:#000;
      }
      .singer-detail{
        margin-top:2px;
        color: #666;
        font-size:12px;
      }
    }
  }
`