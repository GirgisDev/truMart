import React from 'react';
import Product from '../components/Product';
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../store/reducers";
const store = createStore(reducers);

describe('Product component', () => {
  let component;
  const product = {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59347c",
    departmentId: "66da7d1d-38e3-4689-8662-25250eb55bea",
    name: "onn. Bluetooth On-Ear Headphones",
    price: 500,
    promoCode: "JAN10",
    promoActive: true,
    discount: .1,
    image: "https://i5.walmartimages.com/asr/7f85aeab-e88a-4587-81ce-1ef4b4f46970_1.24ab63d3adf65f29e955a8ff59dae46c.jpeg?odnHeight=200\&odnWidth=200\&odnBg=ffffff",
  };

  Enzyme.configure({
    adapter: new Adapter()
  });

  beforeEach(() => {
    component = mount(
      <Provider store={store}>
        <Product product={product} />
      </Provider>
    )
  });


  it('should render the right product name', () => {
    expect(component.find("p._text-center").text()).toEqual(product.name);
  });

  it('should render the right product price', () => {
    expect(component.find("p").get(1).props.children.join("")).toEqual(`\$${parseFloat(product.price).toPrecision(4)}`);
  });
})
