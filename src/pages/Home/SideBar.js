import styled from "styled-components";
import { GrCart } from "react-icons/gr";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { calcTotalPrice, formatCurrency } from "../../utils";
import {
  addItemToCart,
  clearItemFromCart,
  removeItem,
} from "../../redux/actions/cartActions";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: ${(props) => (props.open ? "block" : "none")};
  position: fixed;
  z-index: 30000000000;
  top: 0;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);

  @keyframes slideInFromRight {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes slideOutFromRight {
    100% {
      transform: translateX(0);
    }
    0% {
      transform: translateX(100%);
    }
  }

  .content {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 4;
    overflow: scroll;
    width: 28vw;
    height: 100%;
    box-shadow: 0 6px 12px rgba(107, 82, 82, 0.3);
    background-color: white;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    animation: ${(props) =>
      props.open
        ? "slideInFromRight 0.5s ease-in"
        : "slideOutFromRight 0.5s ease-out"};
    @media only screen and (max-width: 1200px) {
      width: 40vw;
    }
    @media only screen and (max-width: 768px) {
      width: 100vw;
    }
  }

  .left {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    width: 70vw;
    height: 100%;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }

  .top {
    padding: 32.5px;
    background-color: #fff;
    border-bottom: 1.2px solid #eeeeee;
    box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.03);

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .top-text {
    font-size: 14px;
    font-weight: 600;
  }

  .lists {
    padding: 0 30px;
  }

  .list {
    margin: 30px 0;
    text-align: left;

    display: flex;
    justify-content: space-between;
  }

  hr {
    border: 0.1px solid #aaa;
    opacity: 0.25;
  }

  .image {
    width: 70px;
    margin-right: 10px;
  }

  .title {
    font-weight: bold;
    font-size: 14.5px;
    margin-bottom: 5px;
  }
  .author {
    font-size: 13px;
    margin: 1px 0;
  }
  .tag {
    font-size: 13px;
  }
  .summary {
    padding: 8px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .text-right {
    text-align: right;
  }

  .remove-btn {
    font-size: 13px;
    cursor: pointer;
  }
  .price {
    font-size: 15px;
  }
  .control-container {
    display: flex;
    align-items: center;
    border: 1px solid #dddddd;
    margin: 5px 0;
    span {
      padding: 6px 9.8px;
      font-size: 12px;
    }
  }
  .control {
    background: #f9f9fb;

    cursor: pointer;
  }

  .count {
    border-right: 1px solid #dddddd;
    border-left: 1px solid #dddddd;
  }

  .sub-total {
    font-weight: bold;
    font-size: 14.5px;
    margin-top: 10px;
  }

  .checkout {
    padding: 30px;
    margin-top: 30px;
  }

  .align-end {
    align-items: flex-end;
  }

  .total {
    font-size: 15px;
    font-weight: 300;
    color: #000;
  }

  .total-price {
    font-size: 35px;
    font-weight: 300;
  }
`;

const SideBar = ({ setOpen, open }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  return (
    <Wrapper open={open}>
      <div className="left" onClick={() => setOpen(!open)}></div>
      <div className="content">
        <div className="top">
          <div onClick={() => setOpen(!open)} className="flex align cursor">
            <span>
              <BsArrowLeftShort size="25px" />
            </span>
            <span className="top-text ml">Back</span>
          </div>
          <div className="flex align">
            <span className="top-text">Your Cart</span>
            <span className="ml">
              <GrCart size="22px" />
            </span>
          </div>
        </div>
        {cartItems.map((item, idx) => (
          <div className="lists" key={idx}>
            <div className="list">
              <div className="flex">
                <div className="image">
                  <img
                    src={item.image_url}
                    width="100%"
                    height="100%"
                    alt={item.title.trim()}
                  />
                </div>
                <div className="summary">
                  <div>
                    <h5 className="title">{item.title.trim()}</h5>
                    <p className="author">{item.authors[0].name}</p>
                  </div>
                  <p
                    className="remove-btn"
                    onClick={() => dispatch(clearItemFromCart(item))}
                  >
                    Remove
                  </p>
                </div>
              </div>
              <div className="summary text-right">
                <div>
                  <p className="price">
                    {formatCurrency(item.currency, item.price)}
                  </p>
                  <div className="control-container">
                    <span
                      className="control"
                      onClick={() => dispatch(removeItem(item))}
                    >
                      <AiOutlineMinus size="9.5px" />
                    </span>
                    <span className="count">{item.quantity}</span>
                    <span
                      className="control"
                      onClick={() => dispatch(addItemToCart(item))}
                    >
                      <AiOutlinePlus size="9.5px" />
                    </span>
                  </div>
                </div>
                <p className="sub-total">
                  {" "}
                  {formatCurrency(item.currency, item.price * item.quantity)}
                </p>
              </div>
            </div>
            <hr />
          </div>
        ))}
        <div className="checkout">
          <div className="flex justify align-end">
            <p className="total">Subtotal</p>
            <h3 className="total-price">
              {formatCurrency(
                cartItems[0]?.currency ?? "USD",
                calcTotalPrice(cartItems)
              )}
            </h3>
          </div>
          <Button title="Proceed to Checkout" />
        </div>
      </div>
    </Wrapper>
  );
};

export default SideBar;
