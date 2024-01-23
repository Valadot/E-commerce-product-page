import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: hsl(223, 64%, 98%);
  padding: 1rem;
  max-width: 375px;
  border-radius: 5px;
  position: relative;
  margin: 2rem 1rem;

  @media screen and (min-width: 1024px) {
    width: 150px;
    margin: 2rem 0;
  }
`;

export const ItemAmount = styled.p`
  background: none;
  border: none;
  font-weight: 700;
  cursor: default;
`;

export const AddItem = styled.img`
  width: 13px;
  height: 13px;

  cursor: pointer;
`;

export const SubstractItem = styled.img`
  width: 13px;
  height: 5px;
  margin-bottom: 2px;

  cursor: pointer;
`;
