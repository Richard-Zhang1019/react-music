import styled from 'styled-components';

export const SimilarWrapper = styled.div`
  .title{
    color:#333;
    font-size:12px;
    font-weight:900;
    padding-bottom: 5px;
    border-bottom: 1px solid #ccc;
  }
  .similar{
    margin-top:20px;
    .main{
      display:flex;
      justify-content:space-between;
      margin-top:10px;

      .info{
        .songName{
          color:#333;
          font-size:12px;
        }
        .singer{
          color:#999;
          font-size:12px;
        }
      }
      .btn{
        padding-top:14px;
        .btn-player{
          background-position: -69px -455px;
          display:inline-block;
          margin-right:13px;
          width: 10px;
          height: 11px;
          opacity: 0.9;
          cursor: pointer;
        }
        .btn-add{
          background-position: -87px -454px;
          display:inline-block;
          width: 10px;
          height: 11px;
          opacity: 0.9;
        }
      }
    }
  }
`