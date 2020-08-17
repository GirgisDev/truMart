import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  margin: 20px 0;
  align-self: center;
`;

const PaginationNumber = styled.div`
  & {
    display: inline-block;
    width: 34px;
    height: 34px;
    line-height: 32px;
    margin: 0 4px;
    border: 1px solid #FFC220;
    border-radius: 4px;
    font-weight: bold;
    color: #FFC220;
    text-align: center;
    cursor: pointer;
    user-select: none;
  }
  &.active {
    background-color: #FFC220;
    color: #fff;
  }
`;

const Pagination = ({ totalItems, itemsPerPage = 10 }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [countList, setCountList] = useState([]);

  const setPages = () => {
    if (!totalItems) return;
    let calculatedTotalPages = Math.ceil(totalItems / itemsPerPage),
      offset = itemsPerPage / 2;

    if (calculatedTotalPages <= itemsPerPage) {
      setCountList(applyArray(calculatedTotalPages));
    } else if (pageNumber < offset) {
      setCountList(applyArray(itemsPerPage));
    } else {
      setCountList([]);
      let count = pageNumber - offset;
      while(count < calculatedTotalPages && count < (pageNumber + offset)) {
        countList.push(count);
        count++;
      }
    }
    setTotalPages(calculatedTotalPages);
  }

  const applyArray = length => {
    return [...Array(length).keys()]
  }

  const paginate = number => {
    if (number === pageNumber) return;
    setPageNumber(number);
    setPages();
  }

  useEffect(() => {
    if (!countList.length) setPages();
  })

  return (
    <PaginationContainer>
      <div className="pagination__controllers pull-right">

        {pageNumber ? (
          <PaginationNumber onClick={() => paginate(pageNumber - 1)}>{'<'}</PaginationNumber>
        ) : null}

        {countList && countList.map(number => (
          <PaginationNumber
            key={number}
            onClick={() => paginate(number)}
            className={`${number === pageNumber ? 'active' : ''}`}>
            { number + 1 }
          </PaginationNumber>
        ))}

        {pageNumber + 1 < countList.length ? (
          <PaginationNumber
            onClick={() => (totalPages && pageNumber + 1 !== totalPages) ? paginate(pageNumber + 1) : false}>
            {'>'}
          </PaginationNumber>
        ) : null}

      </div>
      <div className="_clearfix"></div>
    </PaginationContainer>
  );
}
 
export default Pagination;