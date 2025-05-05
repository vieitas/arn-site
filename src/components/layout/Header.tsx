import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #005A9C;
  padding: 1rem 2rem;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(RouterLink)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(RouterLink)`
  color: white;
  text-decoration: none;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">Travel + Leisure B2B</Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
