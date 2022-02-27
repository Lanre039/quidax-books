import { MdOutlineShoppingCart } from "react-icons/md";
import styled from "styled-components";

const Wrapper = styled.button`
  width: 100%;
  margin: 15px 0;
  padding: 20px;
  background-color: #000;
  color: #fff;
  text-align: center;
  outline: none;
  border: none;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .btn-text {
    font-size: 18px;
    font-weight: 600;
    flex-grow: 1;
  }
`;

const Button = ({ children, title, handleClick }) => {
  return (
    <Wrapper onClick={handleClick}>
      <MdOutlineShoppingCart size="25px" color="white" />
      {title ? <p className="btn-text">{title}</p> : children}
    </Wrapper>
  );
};

export default Button;
