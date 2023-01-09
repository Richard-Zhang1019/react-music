import styled from 'styled-components';

export const SongHeaderWrapper = styled.div`
  display:flex;
  border-bottom:2px rgb(192,12,12) solid;
  padding-bottom:5px;
  .head-title{
    font-size:24px;
    color:#333;
  }
  .head-choose{
    background-color:rgb(246,246,246);
    border:1px solid rgb(195,195,195);
    border-radius:3px;
    height:31px;
    margin-top:5px;
    padding:5px 0;
    margin-left:12px;
    i{
      cursor: pointer;
      color: #0c73c2 !important;
      padding: 0 10px 0 15px;
      em{
        display: inline-block;
        overflow: hidden;
        vertical-align: middle;
        margin-left: 5px;
        width: 8px;
        height: 5px;
        background-position: -70px -543px;
      }
    }
  }
  .head-hot{
    cursor: pointer;
    margin-left: auto;
    border-radius:3px;
    width: 46px;
    height: 29px;
    line-height: 29px;
    text-align: center;
    color:#fff;
    background-color: rgb(195,11,13);
    &:hover{
      text-decoration:underline;
    }
  }
`