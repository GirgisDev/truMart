import React from 'react';
import styled from 'styled-components';

const ProductContainer = styled.div`
  display: inline-block;
  width: 300px;
  padding: 20px;
  cursor: pointer;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 260px;
  border-radius: 8px;
`;

const ProductPrice = styled.p`
  margin-left: 20px;
  font-weight: bold;
`;
  
const ProductPromo= styled.div`
  margin-left: 20px;
  font-size: .9rem;
`;

const Product = ({ product }) => {
  return (
    <ProductContainer>
      <ProductImg
        src={product.image}
        alt={product.name} />
      <p className="_text-center">{product.name}</p>
      <ProductPrice>${parseFloat(product.price).toPrecision(4)}</ProductPrice>
      {product.promoActive && (
        <ProductPromo>
          Promo: <span className="badge badge--blue">{ product.promoCode }</span>
          Dicount: <span className="badge badge--green">{ (product.discount) * 100 }%</span>
        </ProductPromo>
      )}
    </ProductContainer>
  );
}

export default Product;