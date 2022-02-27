import SearchBar from "../../components/SearchBar";
import { ImBooks } from "react-icons/im";
import { GrCart } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useSelector } from "react-redux";

const Wrapper = styled.nav`
  .nav {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    padding: 20px 35px;
    border-bottom: 1.2px solid #eeeeee;
    box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.03);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
  }

  .content-left {
    display: flex;
    align-items: center;
  }

  .content-right {
    display: flex;
    align-items: center;
    .logo {
      &-icon {
        border-radius: 50%;
        padding: 12px;
        background-color: #000;
        color: #fff;
        margin-right: 15px;

        @media only screen and (max-width: 600px) {
          padding: 8px;
        }
      }

      &-text {
        h3 {
          font-weight: 400;
          font-size: 18px;
          color: #000;
          text-align: left;
          white-space: nowrap;

          @media only screen and (max-width: 600px) {
            font-size: 15px;
            font-weight: bold;
          }
        }
        p {
          font-size: 12px;
          font-style: italic;
          font-weight: 500;
          text-align: left;
          margin-top: 2px;
          color: #000;
          opacity: 0.4;
          @media only screen and (max-width: 768px) {
            display: none;
          }
        }
      }
    }
  }

  .icon {
    border-radius: 50%;
    padding: 10px;
    background-color: #f9f9fb;
    margin: 0 30px;
    cursor: pointer;
    @media only screen and (max-width: 600px) {
      margin: 0 16px;
    }
  }

  .icon-style {
    font-size: 25px;
    @media only screen and (max-width: 500px) {
      font-size: 20px;
    }
  }

  .cart {
    display: flex;
    align-items: flex-start;
    cursor: pointer;

    &-item {
      font-size: 15px;
      border-radius: 50%;
      padding: 3.5px 7px;
      background-color: #66c100;
      color: #fff;
      margin-left: -12px;
      margin-top: -12px;
    }
  }

  .search-bar {
    display: block;
    width: 40%;
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
  .md-search {
    display: none;
    @media only screen and (max-width: 768px) {
      display: flex;
      width: 50%;
      justify-content: flex-end;
    }
  }
  .overlay {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1000000;
  }

  .md-search-field {
    width: 100%;
    background-color: #fff;
    padding: 28px 30px;
    border-bottom: 1.2px solid #eeeeee;
    box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.03);
    animation: slideInFromTop 0.5s ease-in;
    display: flex;

    .bar {
      width: 100%;
      margin-left: 20px;
    }
  }

  .others {
    height: 100%;
  }

  @keyframes slideInFromTop {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const NavBar = ({ setOpen, open, search, setSearch }) => {
  const [show, setShow] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <Wrapper>
      <div className="nav">
        <div className="content-right">
          <div className="logo-icon">
            <ImBooks className="icon-style" />
          </div>
          <div className="logo-text">
            <h3>Quidax Books</h3>
            <p>A flimsy book company</p>
          </div>
        </div>
        <div className="search-bar">
          <SearchBar search={search} setSearch={setSearch} />
        </div>
        <div className="md-search" onClick={() => setShow(!show)}>
          <FiSearch color="black" size="18px" />
        </div>
        <div className="content-left">
          <div className="icon">
            <ImBooks className="icon-style" />
          </div>
          <div className="cart" onClick={() => setOpen(!open)}>
            <GrCart className="icon-style" />
            <div className="cart-item">{cartItems.length}</div>
          </div>
        </div>
      </div>
      {show && (
        <div className="overlay">
          <div className="md-search-field">
            <div onClick={() => setShow(!show)} className="cursor">
              <BsArrowLeftShort size="30px" />
            </div>
            <div className="bar">
              <SearchBar search={search} setSearch={setSearch} />
            </div>
          </div>
          <div className="others" onClick={() => setShow(!show)}></div>
        </div>
      )}
    </Wrapper>
  );
};

export default NavBar;
