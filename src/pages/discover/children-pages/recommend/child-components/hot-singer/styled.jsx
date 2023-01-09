import styled from 'styled-components';

export const Wrapper = styled.div`
  margin:0 auto;
  width:85%;
  margin-top:20px;
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
    margin-top:20px;
    display:flex;
    .info{
      width: 150px;
      height: 62px;
      padding-left: 14px;
      border: 1px solid #e9e9e9;
      border-left: none;
      background-color: rgb(250,250,250);
      .singer-name{
        margin-top:8px;
        font-size:14px;
        font-weight:900;
      }
      .singer-detail{
        color: #666;
        font-size:12px;
        margin-top:5px;
      }
    }
  }
`