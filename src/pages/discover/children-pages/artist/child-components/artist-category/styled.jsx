import styled from 'styled-components';

export const CategoryWrapper = styled.div`
  padding:30px 10px 0 10px;
  border-right: 1px solid #d3d3d3;
  background-color: rgb(249,249,249);
  width:20%;
  div:nth-child(6){
    border:none;
  }
  .category-title{
    border-bottom:1px solid #d3d3d3;
    padding-bottom:5px;
    padding-top:20px;
    .category-title-name{
      margin-left:15px;
      font-size:16px;
      color:#333;
      font-weight:bold;
    }
  }
`
export const CategoryItem = styled.div`
  font-size:12px;
  color:#333;
  background-position: 0 -30px;
  width: 160px;
  height: 29px;
  line-height: 29px;
  span {
    display: inline-block;
    width: 160px;
    padding-left: 27px;
    background-position: 0 -30px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  &.active {
    span {
      color: #c20c0c;
      background-position: 0 0;
      &:hover{
        text-decoration:none;
      }
    }
  }
`