import styled from "styled-components";

const Wrapper = styled.div`
  padding: 30px;
  display: flex;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    height: 800px;
    padding-bottom: 70px;
    overflow: scroll;
  }

  .content-left {
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 150px;
    left: 50px;
    margin-right: 100px;
    text-align: left;

    @media only screen and (max-width: 600px) {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      margin-right: 0;
    }

    .image {
      background: blue;
      height: 400px;
      width: 250px;
      margin: 20px 0 50px;

      @media only screen and (max-width: 600px) {
        height: 300px;
        width: 200px;
        margin: 0;
        margin-top: 20px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
      }
    }

    .tag {
      font-size: 14px;
      color: #66c100;
    }

    .price {
      margin-top: 5px;
      font-size: 35px;
      font-weight: 300;
    }
  }

  .my-5 {
    margin: 15px 0;
  }

  .mb-10 {
    margin-bottom: 20px;
  }

  .content-right {
    text-align: left;
    margin-top: 55px;
    margin-left: 355px;
    max-width: 1200px;

    @media only screen and (max-width: 1024px) {
      margin-left: 305px;
    }

    @media only screen and (max-width: 600px) {
      margin-left: 0;
      margin-top: 20px;
    }

    .info-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
      }
    }

    .genre {
      font-size: 14px;
      font-weight: 600;
      margin: 1px 0;
    }

    .year {
      font-size: 14px;
      margin-top: 5px;
    }

    .title {
      font-size: 40px;
      @media only screen and (max-width: 1024px) {
        font-size: 30px;
      }
    }
    hr {
      border: 0.1px solid #aaa;
      opacity: 0.25;
    }

    .info {
      display: flex;
      align-items: flex-end;
      margin: 10px 0;

      .tag {
        font-size: 12px;
        margin-top: 5px;
      }

      .mr-5 {
        margin-right: 15px;
      }

      .rate {
        font-weight: normal;
      }

      hr {
        border-left: 0.1px solid #aaa;
        opacity: 0.2;
        height: 50px;
      }

      .users {
        padding: 0px 15px 0 0;
        text-align: center;
      }
      .heart {
        margin-left: 10px;
      }

      .rating {
        padding: 0px 0 0 15px;
      }
    }

    .header {
      font-size: 15px;
      font-weight: bold;
      margin-top: 40px;
      margin-bottom: 22px;
      line-height: 20px;
    }

    .desc {
      font-size: 15px;
      line-height: 22px;
      margin-bottom: 22px;
    }
  }
  .top-text {
    font-size: 14px;
    font-weight: 600;
  }

  .btn {
    display: none;
    text-align: left;
    @media only screen and (max-width: 600px) {
      display: block;
      position: absolute;
      bottom: 0;
      left: 30px;
      right: 30px;
    }

    &-content {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;
      margin-left: 20px;
      text-align: left;

      .price {
        font-size: 30px;
        font-weight: 300;
      }

      .cart,
      .tag {
        font-size: 14px;
        font-weight: bold;
      }

      .tag {
        color: #64c000;
        margin-top: 5px;
      }
    }

    &-cart {
      @media only screen and (max-width: 600px) {
        display: none;
      }
    }
  }

  .hide {
    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
`;

export default Wrapper;
