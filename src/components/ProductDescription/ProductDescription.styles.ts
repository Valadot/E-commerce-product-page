import styled from "styled-components";

export const ProductWrapper = styled.div`
  max-width: 375px;
  padding: 1rem;

  @media screen and (min-width: 425px) {
    margin: 0 auto;
  }

  @media screen and (min-width: 1024px) {
    max-width: 475px;
    line-height: 1.5rem;
    margin: 5rem 0 0 0;
  }
`;

export const ProductManufacturer = styled.div`
  color: hsl(26, 100%, 55%);
  letter-spacing: 0.1rem;
  font-weight: 700;
  font-size: 12px;
`;

export const ProductHeadline = styled.div`
  font-size: 14px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: hsl(220, 13%, 13%);

  @media screen and (min-width: 1024px) {
    margin-top: 1rem;
  }
`;

export const ProductText = styled.div`
  color: hsl(219, 9%, 45%);
  font-size: 15px;

  @media screen and (min-width: 1024px) {
    margin-top: 2rem;
  }
`;

export const Pricing = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  color: hsl(220, 13%, 13%);

  div {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
  }
`;

export const Discount = styled.div`
  background-color: hsl(25, 100%, 94%);
  padding: 0.2rem 0.4rem;
  border-radius: 5px;
  margin-left: 1rem;
  font-weight: 700;

  span {
    color: hsl(26, 100%, 55%);
    opacity: 1;
  }
`;

export const OldPrice = styled.div`
  text-decoration: line-through;
  color: hsl(220, 14%, 75%);
  font-weight: 700;
`;

export const ButtonWrapper = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
  }
`;
