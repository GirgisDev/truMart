import React from 'react'
import styled from 'styled-components';
import { connect } from "react-redux"
import Departments from './Departments';
import Product from './Product';
import Pagination from './Pagination';

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 20px auto;
`;
const ProductsCount = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  `;
const ProductsListContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const DepartmentsContainer = styled.div`
  flex: 1;
`;
const ProductsList = styled.div`
  display: flex;
  flex: 5;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Products = ({ products }) => {
  return (
    <ProductsContainer>
      <ProductsCount>
        <div>1 - 16 of {products.length} products</div>
        <div className="_separator"></div>
      </ProductsCount>
      <ProductsListContainer>
        <DepartmentsContainer>
          <Departments style={{ flex: 2 }}>Categories</Departments>
        </DepartmentsContainer>
        <ProductsList>
          {products.map(prod => (
            <Product key={prod.id} product={prod} />
          ))}
        </ProductsList>
      </ProductsListContainer>
      <Pagination
        totalItems={products.length} />
    </ProductsContainer>
  );
}

const mapStateToProps = ({ products }) => ({ products })

export default connect(mapStateToProps)(Products);