import React from 'react';
import Departments from '../components/Departments';
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../store/reducers";
import { receiveDepartments } from '../store/actions/departments.action';
const store = createStore(reducers);

describe('Department component', () => {
  let component;
  const department = {
    id: "66da7d1d-38e3-4689-8662-25250eb55bea",
    name: "Electronics"
  };

  Enzyme.configure({
    adapter: new Adapter()
  });

  beforeEach(() => {
    store.dispatch(receiveDepartments([department]));
    component = mount(
      <Provider store={store}>
        <Departments
          currentDepartment={department.id}
          filterDepartment={() => { }} />
      </Provider>
    );
  });


  it('should render the right way', () => {
    expect(component.find("h4").text()).toEqual("Departments");
  })
  it('should correctly highlight the current chosen department', () => {
    expect(component.find("li.active-department").text()).toEqual(department.name);
  })
})
