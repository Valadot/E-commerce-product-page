import styled from "styled-components";

interface BasketContainerProps {
  showBasket: boolean;
}

export const BasketContainer = styled.div<BasketContainerProps>`
  width: 350px;
  height: 230px;
  z-index: 99;
  padding: 1rem;
  background-color: white;
  position: absolute;
  display: ${(props) => (props.showBasket ? "block" : "none")};
  box-shadow: 1px 1px 20px 3px rgba(0, 0, 0, 0.4);
  top: 30px;
  left: -275px;
  margin: 0.4rem;
  border-radius: 5px;
  p {
    font-weight: 700;
  }

  @media screen and (min-width: 1024px) {
    width: 350px;
    left: -240px;

    top: 45px;
  }
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 1px solid hsl(220, 14%, 75%);
  width: calc(100% + 2rem);
  margin: 1rem -1rem 0 -1rem;
`;

export const CartItemWrapper = styled.div`
  height: 100%;
`;

export const CartItem = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: hsl(219, 9%, 45%);
  font-weight: 700;
`;

export const ProductDetails = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const ProductImage = styled.img`
  width: 50px;
  border-radius: 5px;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  gap: 0.5rem;
  color: hsl(219, 9%, 45%);

  p {
    font-weight: 400;
  }
  span {
    color: black;
    font-weight: 700;
  }
`;

export const DeleteItem = styled.div`
  margin-top: 1rem;
  margin-left: 2.4rem;
  cursor: pointer;
`;

export const CheckoutWrapper = styled.div``;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  border: none;
  background-color: hsl(26, 100%, 55%);
  color: white;
  font-weight: 700;
  letter-spacing: 0.07rem;
  margin-top: 1rem;
  cursor: pointer;
`;
