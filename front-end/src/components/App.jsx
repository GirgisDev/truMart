import React, { useEffect } from 'react';
import { GlobalStyles } from "../global-styles"
import Navbar from '../common/Navbar';
import Products from './Products';
import { connect } from 'react-redux';
import { handleInitialData } from '../store/actions/shared.action';
import Loading from '../common/Loading';

function App({ loading, dispatch }) {
  useEffect(() => {
    dispatch(handleInitialData(0));
  }, []);

  return (
    <>
      {loading && <Loading />}
      <GlobalStyles />
      <Navbar />
      <Products />
    </>
  );
}

const mapStateToProps = ({ loading }) => ({ loading: loading.current })

export default connect(mapStateToProps)(App);
