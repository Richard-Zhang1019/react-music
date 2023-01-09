import styled from 'styled-components';

export const ArtistItemWrap = styled.div`
  width: 130px;
  margin-top: 20px;
  .image{
    display:flex;
    justify-content:space-between;
    img{
      cursor: pointer;
    }
  }
  
  .info{
    height: 24px;
    line-height:32px;
    margin-bottom:10px;
    cursor: pointer;
    
    &:hover{
      text-decoration:underline;
    }
    span{
      display: inline-block;
      overflow: hidden;     
      vertical-align: middle;
      cursor: pointer;
      width: 17px;
      height: 18px;
      background-position: 0 -740px;
      margin-left:5px;
    }
  }
`