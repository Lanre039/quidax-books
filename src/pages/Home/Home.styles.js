import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;

  .loading {
    margin-top: 100px;
    margin-left: 30px;
    text-align: left;
    font-size: 20px;
  }

  .carousel {
    &-header {
      padding: 35px;
      padding-left: 40px;
      padding-bottom: 20px;
    }
  }

  .header {
    text-align: left;
    font-size: 16px;
    font-weight: bold;

    margin-bottom: 15px;
  }

  .found {
    font-weight: normal;
  }

  hr {
    border: 0.1px solid #aaa;
    opacity: 0.25;
  }

  // ALL BOOKS SECTION
  .books {
    padding: 35px;
    padding-left: 40px;
    margin-top: 30px;
    @media only screen and (max-width: 330px) {
      padding: 35px 20px;
    }

    .books-section {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      cursor: pointer;
    }

    .flex {
      display: flex;
      justify-content: space-between;
    }

    &-content {
      display: flex;
      margin-top: 20px;
      margin-right: 20px;
      margin-bottom: 20px;
      min-width: 500px;

      background-color: #fff;
      @media only screen and (max-width: 1440px) {
        width: 400px;
        min-width: auto;
      }
      @media only screen and (max-width: 900px) {
        width: auto;
      }
      @media only screen and (max-width: 800px) {
        width: 320px;
      }
      @media only screen and (max-width: 600px) {
        width: auto;
      }

      &:hover {
        box-shadow: 0 8px 24px rgb(0 0 0 / 10%);
      }
    }

    .image {
      width: 200px;
      margin-right: 10px;

      @media only screen and (max-width: 330px) {
        width: 140px;
      }
    }

    .details {
      width: 100%;
      padding: 8px 0;
      text-align: left;

      .title {
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 5px;
      }
      .author {
        font-size: 13px;
        margin: 1px 0;
      }
      .tag {
        font-size: 13px;
      }

      .info {
        display: flex;
        align-items: flex-end;
        margin: 10px 0;

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
      .price {
        margin-top: 18px;
      }

      .copy {
        color: #66c100;
      }

      .red {
        color: red;
      }

      .add-to_cart {
        display: flex;
        align-items: center;
        margin-top: 18px;
      }

      .cart {
        font-weight: bold;
        margin-left: 10px;
        vertical-align: center;
      }
    }
  }
`;

export default Wrapper;
