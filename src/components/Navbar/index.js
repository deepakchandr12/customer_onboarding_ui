import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  MobileIcon,
  NavLinks1,
} from "./NavbarElements";
import { capgLogo as Logo } from "../../assets/imageUrls";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollTo();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo onClick={toggleHome} to="/">
            <img src={Logo} alt="" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="experience"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About Us
              </NavLinks>
            </NavItem>

            {/* <NavItem>
              <NavLinks1
                onClick={toggleHome}
                to="/first"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Customer Onboarding
              </NavLinks1>
            </NavItem> */}
            <NavItem>
              <NavLinks1
                onClick={toggleHome}
                to="/first"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Loan Organisation
              </NavLinks1>
            </NavItem>
            <NavItem>
              <NavLinks1
                onClick={toggleHome}
                to="/LoanCalculator"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Loan Calculator
              </NavLinks1>
            </NavItem>
            <NavItem>
              <NavLinks1
                onClick={toggleHome}
                to="/DisburseLoan"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Disburse Loan
              </NavLinks1>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
