import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 75px;
  font-size: 14px;
  color: #fff;
  background-color: #242424;

  .content {
    height: 70px;

    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;

  span {
    cursor: pointer;
  }

  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  .select-list {
    display: flex;
    line-height: 70px;

    .select-item {
      position: relative;
      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }

      :last-of-type a {
        position: relative;

        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${require("@/assets/img/sprite_01.png")});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }

      &:hover a,
      a.active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
    background-color: transparent;

    &:hover {
      border-color: #fff;
      color: #fff;
    }
  }
`;

export const Login = styled.div`
  cursor: pointer;
`;

export const LoginWindow = styled.div`
  background-color: rgba(0, 0, 0, 0.65);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9998;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    border-radius: 4px;
    box-shadow: 0 5px 16px rgb(0 0 0 / 80%);
    border: none;
    width: 500px;
    height: 280px;

    .top {
      padding: 0 18px;
      height: 38px;
      line-height: 38px;
      z-index: 10;
      border-bottom: 1px solid #191919;
      border-radius: 4px 4px 0 0;
      background: #2d2d2d;
      font-weight: bold;
      font-size: 14px;
      color: #fff;
      display: flex;
      justify-content: space-between;

      .cancel {
        cursor: pointer;
      }
    }

    .content {
      height: 250px;
      border: 1px solid #d8d8d8;
      border-width: 0 1px 1px;
      border-radius: 0 0 4px 4px;
      background: #fff;
      display: flex;
      justify-content: space-around;

      .middle {
        margin-top: 40px;
        width: 220px;

        input {
          display: block;
          padding: 0 8px;
          width: 220px;
          height: 30px;
          outline: none;
          border: 1px solid rgb(205, 205, 205);
          color: #333;
          background: none;
        }

        .verify {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;

          button {
            background-image: linear-gradient(
              rgb(255, 255, 255),
              rgb(248, 248, 248)
            );

            border: 1px solid rgb(205, 205, 205);
            border-radius: 5px;
          }

          .verifycode {
            width: 130px;
          }
        }

        .login {
          margin-top: 20px;
          background-color: rgb(47, 127, 204);
          text-align: center;
          width: 220px;
          height: 31px;
          line-height: 31px;
          border: 1px solid rgb(66, 141, 214);
          border-radius: 5px;
          cursor: pointer;
        }
      }
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      padding: 0 19px;
      height: 48px;
      border-top: 1px solid #c6c6c6;
      border-radius: 0 0 4px 4px;
      line-height: 48px;
      background-color: #f7f7f7;
    }
  }  
`;
