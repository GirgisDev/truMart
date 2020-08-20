import React from 'react';
import styled from 'styled-components';

const CountContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProductsCount = ({ currentPageNum, products, productsCount }) => {
  return (
    <CountContainer>
      {products.length ? (
        <div>{currentPageNum * 12 + 1} - {currentPageNum * 12 + products.length} of {productsCount} products</div>
      ) : <div>0 products</div>}
      <div className="_separator"></div>
    </CountContainer>
  );
}
 
export default ProductsCount;