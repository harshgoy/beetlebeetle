import React, { useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #120920;
  position: relative;
  height: 7rem;
  z-index: 2;

  @media (min-width: 769px) {
   
    display: none;
  }
`;

const NavbarLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  flex-direction: column;
  background-color:  #120920;
  position: absolute;
  top: 100%;
  color:#fff;
  left: 0;
  width: 100vw;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  padding: 1rem;
  width:60%;
`;

const NavbarLink = styled.li`
  margin-right: 25px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: large;

  &:hover {
    font-weight: bold;
  }
`;

const MenuIcon = styled(FaBars)`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 999;
  color:#fff;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <MenuIcon onClick={toggleMenu} />
      <LogoContainer>
       <img src="./logo.png" alt="" />
      </LogoContainer>

      <NavbarLinks isOpen={isOpen}>
        <NavbarLink >Industries</NavbarLink>
        <NavbarLink >Product</NavbarLink>
        <NavbarLink >Calculator</NavbarLink>
       
        
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default MobileNavbar;