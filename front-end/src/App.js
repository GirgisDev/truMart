import React, { useEffect } from 'react';
import './App.css';
import { GlobalStyles } from "./global-styles"
import Navbar from './components/Navbar';
import Products from './components/Products';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared.action';

function App({ dispatch }) {
  useEffect(() => {
    dispatch(handleInitialData());
  });

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Products />
    </>
  );
}

export default connect()(App);
