import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid #d3d3d3;
  padding: 40px;
  background-color: #fff;
  min-height:700px;
  .search-wrap{
    width: 420px;
    height: 40px;
    margin: 0 auto;
    background-position: 0 0;
    z-index: 10;
    .search-input{
      float: left;
      width: 320px;
      height: 17px;
      margin: 12px 0 0 20px;
      padding: 0;
      background: #fff;
      border: none;
    }
    span{
      float: right;
      width: 50px;
      height: 40px;
      text-indent: -9999px;
      cursor: pointer;
    }
  }

  .info{
    color: #999;
    margin: 28px 0 17px;
  }

  .search-result{

    .search-result-head{
      height: 39px;
      border: 1px solid #ccc;
      border-width: 0 1px;
      background-position: 0 0;
      background-repeat: repeat-x;
      display:flex;
      justify-content:space-around;
      li{
        display:block;
        height: 39px;
        line-height:39px;
        text-align:center;
        font-size: 14px;
        position: relative;
        left: -1px;
        a{
          display:block;
          height: 39px;
          width:110px;
          line-height:39px;
          &:hover{
            text-decoration:none;
          }
        }
        .search-link{
          background-position: left -90px;
          border-right:1px solid #ccc;
        }
      }
    }
  }
`