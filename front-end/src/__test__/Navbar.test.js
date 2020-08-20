import React from 'react';
import Navbar from '../common/Navbar';
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./../store/reducers/";
import middleware from "./../store/middlewares/";
const store = createStore(reducer, middleware);

describe('Navbar component', () => {
  let component;

  Enzyme.configure({
    adapter: new Adapter()
  });

  beforeEach(() => {
    component = mount(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
  });

  
  it('should render the right way', () => {
    expect(component.find("a").text()).toEqual("TruMart");
    expect(component.find("button").text()).toEqual("Search");
  })
})
