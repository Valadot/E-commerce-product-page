import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Wrapper = styled.div`
  position: relative;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    gap: 8rem;
    margin-right: 4rem;
    margin-top: 5rem;
    margin-left: 4rem;
  }
`;
