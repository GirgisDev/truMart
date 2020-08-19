import React, { useState } from 'react'
import styled from 'styled-components';
import { connect } from "react-redux"
import Departments from './Departments';
import Product from './Product';
import Pagination from './../common/Pagination';
import { getProducts } from '../store/actions/products.action';

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
  
const NoContent = styled.h2`
  flex: 5;
  margin-top: 40px;
  text-align: center;
`;

const Products = ({ loading, products, productsCount, dispatch }) => {
  const [currentDepartment, setCurrentDepartment] = useState("");
  const [currentPageNum, setCurrentPageNum] = useState("");

  const paginateProducts = pageNum => {
    setCurrentPageNum(pageNum);
    dispatch(getProducts({ pageNum, departmentId: currentDepartment }));
  }

  const filterDepartment = departmentId => {
    setCurrentDepartment(departmentId);
    dispatch(getProducts({ departmentId, pageNum: currentPageNum }));
  }

  return (
    <ProductsContainer>
      <ProductsCount>
        {products.length ? (
          <div>{currentPageNum * 12 + 1} - {currentPageNum * 12 + products.length} of {productsCount} products</div>
        ) : <div>0 products</div>}
        <div className="_separator"></div>
      </ProductsCount>

      <ProductsListContainer>
        <DepartmentsContainer>
          <Departments 
            style={{ flex: 2 }}
            currentDepartment={currentDepartment}
            filterDepartment={filterDepartment}>
          </Departments>
        </DepartmentsContainer>

        {products.length ? (
          <ProductsList>
            {products.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </ProductsList>
        ) : (
          <NoContent>
            No Products to be shown, try differnet filters.
          </NoContent>
        )}
      </ProductsListContainer>
      
      {!loading ? (
        <Pagination
          currentPageNum={currentPageNum}
          totalItems={productsCount}
          paginateFN={paginateProducts} />
      ) : null }
    </ProductsContainer>
  );
}

const mapStateToProps = ({ loading, products }) => ({ loading: loading.current, products: products.items, productsCount: products.productsCount })

export default connect(mapStateToProps)(Products);