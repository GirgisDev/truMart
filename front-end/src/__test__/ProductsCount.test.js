import React from 'react';
import ProductsCount from '../components/ProductsCount';
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../store/reducers";
const store = createStore(reducers);

describe('Product component', () => {
  let component;

  Enzyme.configure({
    adapter: new Adapter()
  });

  beforeEach(() => {
    component = mount(
      <Provider store={store}>
        <ProductsCount
          currentPageNum={0}
          products={[{}]}
          productsCount={1} />
      </Provider>
    )
  });


  it('should render the current showing products and total products number', () => {
    expect(component.find("div").first().text()).toEqual("1 - 1 of 1 products");
  });
})
