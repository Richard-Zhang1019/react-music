import styled from 'styled-components';

export const DownloadWrapper = styled.div`
  margin-top:20px;
  .title{
    color:#333;
    font-size:12px;
    font-weight:900;
    padding-bottom: 5px;
    border-bottom: 1px solid #ccc;
  }
  .btn{
    height: 65px;
    margin-top: 20px;
    background-position: 0 -392px;
    .mac{
      height: 48px;
      cursor: pointer;
      &:hover{
        background-position: 0 -472px;
      }
    }
    .win{
      height: 48px;
      cursor: pointer;
    }
    .android{
      height: 48px;
      cursor: pointer;
    }
  }
  .tip{
    margin-top:10px;
    color:#999;
  }

`