import styled from 'styled-components';

export const AlphaListWrap = styled.div`
  margin-top:${props => props.hasTop ? "20px": 0};
  display:flex;
  justify-content:space-between;
  
  .item{
    border-radius: 3px;
    cursor: pointer;
    font-size: 14px;
    text-align:center;
    align-items:center;
    span{
      padding: 2px 7px 1px 7px;
      color: #333;
      &:hover {
        text-decoration: underline;
      }
    }  
    &:first-child{
      font-size: 12px;
    }
    &:last-child{
      font-size: 12px;
    }
  }

  .active {
    background-color: #c20c0c;
    span {
      color: #fff;
    }
  }
`