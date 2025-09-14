import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? 'rgba(0, 0, 0, 0.85)' : '#000')};
  height: 60px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0ms.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1500px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  padding-left: 30px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  img {
    height: 50px;

    @media screen and (max-width: 768px) {
      height: 43px;
    }
    @media screen and (max-width: 480px) {
      height: 33px;
    }
  }
`;





export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  padding-right: 70px;
  
  @media screen and (max-width: 768px) {
    height: 70px;
    padding-left: 250px;
  }
  @media screen and (max-width: 480px) {
    height: 33px;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #0176B6;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 25px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    height: 43px;
  }
  @media screen and (max-width: 480px) {
    height: 33px;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
