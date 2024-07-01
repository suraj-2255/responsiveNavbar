import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  height: 60px;
  background: #3ea5b5;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  a {
    color: #fff;
    text-decoration: none;
    padding: 0 15px;

    &:hover {
      color: #ddd;
    }
  }

  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    background: #333;

    a {
      padding: 10px;
      width: 100%;
      text-align: center;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #fff;
    margin-bottom: 4px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const LastDiv = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <NavLinks isOpen={isOpen}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/register">Register</a>
        <a href="/login">Login</a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/register">Register</a>
        <a href="/login">Login</a>
      </NavLinks>
      <Hamburger onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <LastDiv></LastDiv>
    </Nav>
  );
};

export default Navbar;
