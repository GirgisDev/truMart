import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getProducts } from '../store/actions/products.action';

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
  & {
    width: 260px;
    height: 28px;
    padding: 0 8px;
    border: none;
    border-radius: 3px 0 0 3px;
  }
  &:focus {
    outline: none;
  }
`;

const SearchBtn = styled.button`
  & {
    height: 28px;
    padding: 0 20px;
    border: 1px solid #FFC220;
    border-radius: 0 4px 4px 0;
    background-color: #FFC220;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const Navbar = ({ dispatch }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const searchProducts = () => {
    dispatch(getProducts({ searchKeyword }))
  }

  const handleEnterPress = e => {
    if (e.key === 'Enter') searchProducts();
  }

  return (
    <Nav>
      <NavBrand href="#">TruMart</NavBrand>
      <SearchContainer>
        <SearchInput 
          type="text" 
          placeholder="Search" 
          aria-label="Search"
          onInput={e => setSearchKeyword(e.target.value)}
          onKeyUp={handleEnterPress} />
        <SearchBtn onClick={searchProducts}>Search</SearchBtn>
      </SearchContainer>
    </Nav>
  );
}

export default connect()(Navbar);