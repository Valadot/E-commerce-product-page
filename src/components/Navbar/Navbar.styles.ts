import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  position: relative;
  align-items: center;
  margin: 1rem;
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    justify-content: space-between;
    border-bottom: 1px solid hsl(220, 14%, 75%);

    padding: 0 1.5rem 0.5rem 0;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 20px;
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const Hamburger = styled.img`
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const LinksMobile = styled.ul`
  margin-top: 2rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  list-style: none;

  a {
    cursor: pointer;
    text-decoration: none;
    color: hsl(219, 9%, 45%);
  }
`;

export const CloseImg = styled.img`
  cursor: pointer;
`;

export const LinksDesktop = styled.ul`
  display: none;
  list-style: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    margin-left: 4rem;
  }

  a {
    color: hsl(219, 9%, 45%);
    text-decoration: none;
  }
  a:hover {
    border-bottom: 5px solid orange;
    margin-top: 1rem;
    position: relative;
    padding-bottom: 25px;
  }
`;

export const UserShoppingWrapper = styled.div`
  display: flex;

  align-items: center;
  margin-top: 0.3rem;
  gap: 1.5rem;

  img:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 1024px) {
    margin-left: auto;
  }
`;

export const ShoppingCartImageWrapper = styled.div`
  position: relative;
`;

export const UserAvatar = styled.img`
  width: 30px;
  aspect-ratio: 1/1;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 1024px) {
    width: 40px;
  }
`;

interface SidebarProps {
  show: boolean;
}

export const Sidebar = styled.div<SidebarProps>`
  color: hsl(220, 13%, 13%);
  position: fixed;
  top: 0;
  padding: 1.5rem;
  left: ${(props) => (props.show ? "0" : "-300px")};
  width: 200px;
  height: 100vh;
  background: white;
  transition: left 0.3s ease-in-out;
  z-index: 100;

  svg {
    cursor: pointer;
  }
`;

export const BasketNotification = styled.div`
  position: absolute;
  color: white;
  right: -8px;
  top: -12px;
  font-size: 11px;
  background-color: hsl(26, 100%, 55%);
  padding: 0rem 0.5rem;
  border-radius: 100vw;
  font-weight: 700;

  @media screen and (min-width: 1024px) {
    top: -10px;
    right: -8px;
  }
`;
