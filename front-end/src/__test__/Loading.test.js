import React from 'react';
import Loading from '../common/Loading';
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./../store/reducers/";
import middleware from "./../store/middlewares/";
const store = createStore(reducer, middleware);

describe('Loading component', () => {
  let component;

  Enzyme.configure({
    adapter: new Adapter()
  });

  beforeEach(() => {
    component = mount(
      <Provider store={store}>
        <Loading />
      </Provider>
    );
  });

  
  it('should render the right way', () => {
    expect(component.find("h3").text()).toEqual("Loading...");
  })
})
