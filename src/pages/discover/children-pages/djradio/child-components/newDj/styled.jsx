import styled from 'styled-components';

export const NewDjWrapper = styled.div`
  margin-top: 15px;
  .newdj-head{
    height: 40px;
    border-bottom:2px solid rgb(194,12,12);
    span{
      font-size:24px;
      color:#333;
    }
  }
  .newdj-content{
    margin-top:20px;
    display:flex;
    justify-content:space-between;
    &-item{
      width: 150px;
      img{
        width: 150px;
        height: 150px;
        cursor: pointer;
      }
      .item-name{
        margin:10px 0 6px;
        color:#333;
        font-size:14px;
      }
      .item-rcmdtext{
        color:#999;
      }
    }
  }
`