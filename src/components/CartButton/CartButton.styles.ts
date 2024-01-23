import styled from "styled-components";
import ShoppingCart from "../../../ecommerce-product-page-main/images/icon-cart.svg";

export const ButtonWrapper = styled.div`
  padding: 0 1rem;
  margin-bottom: 4rem;
  cursor: pointer;
  max-width: 375px;

  @media screen and (min-width: 1024px) {
    margin-bottom: 0;
    width: 260px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  position: relative;
  width: 100%;
  padding: 1.2rem;
  border: none;
  background-color: hsl(26, 100%, 55%);
  box-shadow: 0px 15px 20px -10px hsl(26, 100%, 55%);
  border-radius: 5px;
  color: white;
  font-weight: 700;
  letter-spacing: 0.04rem;

  &:before {
    content: "";
    display: block;
    background-image: url(${ShoppingCart});
    position: absolute;
    top: 50%;
    left: 90px;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 1rem;
    filter: brightness(3);
  }

  @media screen and (min-width: 1024px) {
    &:before {
      left: 50px;
    }
  }
`;
