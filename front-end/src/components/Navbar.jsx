import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 40px;
  color: #FFF;
  background-color: #000;
`;

const NavBrand = styled.a`
  color: #FFF;
  font-size: 1.6rem;
  letter-spacing: .5px;
  font-weight: bold;
  text-decoration: none;
`;
const SearchContainer = styled.div`
  display: inline-block
`;
const SearchInput = styled.input`
  width: 260px;
  height: 28px;
  padding: 0 8px;
  border: none;
  border-radius: 3px 0 0 3px;
`;
const SearchBtn = styled.button`
  background-color: #FFC220;
  height: 32px;
  padding: 0 20px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Nav>
      <NavBrand href="#">TruMart</NavBrand>
      <SearchContainer>
        <SearchInput type="text" placeholder="Search" aria-label="Search" />
        <SearchBtn>Search</SearchBtn>
      </SearchContainer>
    </Nav>
  );
}

export default Navbar;