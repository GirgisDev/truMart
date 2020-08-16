import React from 'react'
import styled from 'styled-components';

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 20px auto;
`;

const Products = () => {
  return (
    <ProductsContainer>
      <div>1 - 16 of 514 products</div>
      <div className="separator"></div>
    </ProductsContainer>
  );
}
 
export default Products;