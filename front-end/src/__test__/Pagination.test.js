import React from 'react';
import Pagination from '../common/Pagination';
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./../store/reducers/";
import middleware from "./../store/middlewares/";
const store = createStore(reducer, middleware);

describe('Pagination component', () => {
  let component;

  Enzyme.configure({
    adapter: new Adapter()
  });

  beforeEach(() => {
    component = mount(
      <Provider store={store}>
        <Pagination currentPageNum={0} totalItems={12} itemsPerPage={12} paginateFN={() => {}} />
      </Provider>
    );
  });

  
  it('should render the right pages buttons with the given data', () => {
    expect(component.find("div.active").text()).toEqual("1");
  })
})
