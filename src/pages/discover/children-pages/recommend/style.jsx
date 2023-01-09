import styled from 'styled-components';

export const RecommendWraper = styled.div`
  
`

export const Content = styled.div`
  background-color: #fff;
  display: flex;
  border: 1px solid #d3d3d3;
  border-right:none;
`

export const RecommendLeft = styled.div`
  padding: 20px;
  width: 729px;
`

export const RecommendRight = styled.div`
  width: 250px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  .login{
    height: 126px;
    background-position: 0 0;
    p{
      width: 205px;
      margin: 0 auto;
      padding: 16px 0;
      line-height: 22px;
    }
    span{
      display: block;
      margin: 0 auto;
      width: 100px;
      height: 31px;
      line-height: 31px;
      text-align: center;
      color: #fff;
      text-shadow: 0 1px 0 #8a060b;
      background-position: 0 -195px;
      cursor: pointer;
      &:hover{
        text-decoration: none;
      }
    }
  }
  .apply{
    border-radius: 4px;
    margin:0 auto;
    margin-top:20px;
    width: 85%;
    height:32px;
    line-height:30px;
    color: #333;
    background-color: rgb(248,248,248);
    border:2px solid rgb(205,205,205);
    span{
      cursor: pointer;
    }
    a:hover{
      text-decoration:none;
    }
    i{
      text-align:center;
      display:block;
      color: #333;
      font-weight:900;
    }
  }
`
