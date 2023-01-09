import styled from 'styled-components';

export const SingerWrap = styled.div`
 
  display:flex;
  justify-content:space-between;
  flex-flow: wrap;
  .singer-item{
    img{
      cursor: pointer;
    }
    margin-top:20px;
    .singer-item-info{
      margin-top:8px;
      display:flex;
      justify-content:space-between;
      p{
        cursor: pointer;
      }
      i{
        display: inline-block;
        overflow: hidden;
        vertical-align: middle;
        width: 17px;
        height: 18px;
        background-position: 0 -740px;
        cursor: pointer;
      }
    }
  }
`