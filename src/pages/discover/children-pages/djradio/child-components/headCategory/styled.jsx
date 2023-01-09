import styled from 'styled-components';

export const CategoryListWrapper = styled.div`
  display:flex;
  margin-top:40px;
  .arrow {
    width: 20px;
    height: 30px;
    background-image: url(${require("@/assets/img/radio_slide.png")});
    cursor: pointer;
  }

  .arrow-left {
    margin-left: 15px;
    margin-top:80px;
    background-position: 0 -30px;
  }

  .arrow-right {
    margin-right: 15px;
    margin-top:80px;
    background-position: -30px -30px;
  }
`

export const CategoryContent = styled.div`
  flex:1;
  width: 900px;
  .carousel-one{
    display:flex!important;
    flex-wrap:wrap;
    height:195px;
    .one-list-item{
      cursor: pointer;
      width: 70px;
      height: 70px;
      text-align: center;
      margin: 0 0 25px 28px;
      &:hover{
        background-color: rgb(246,247,247);
      }
      &.active {
        color: #C20C0C;
        border: 2px solid #d35757;
        border-radius:5px;
        .image {
          background-position: -48px 0;
        }
        span{
          color: #C20C0C;
        }
      }
      span{
        font-size:12px;
        color:#888;
      }
    }
  }

  .carousel-two{
    display: flex !important;;
    .item1, .item2{
      margin: 0 10px;
      cursor: pointer;
      &:hover{
        background-color: rgb(246,247,247);
      }
      div{
        margin:0 auto;
        padding: 0 20px 0 20px;
        width: 48px;
        height: 48px;
        background: url("https://music.163.com/style/web2/img/index_radio/radio_faq.png") no-repeat 0 9999px;
        background-position:0 0;
      }
      span{
        font-size:12px;
        color:#888;
      }
    }
  }

  .dots {
    bottom: 5px;
    li {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;

      button {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #aaa;
      }
    }

    li.slick-active {
      width: 20px;
      button {
        background-color: #C20C0C;
      }
    }
  }
`

export const CategoryItemImage = styled.div`
  width: 48px;
  height: 48px;
  margin:0 auto;
  background-image: url(${props => props.imgUrl});
`