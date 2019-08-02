import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Login from "../Components/Login";

import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders shallow without crashing", () => {
  shallow(<Login />);
});

it('snapshot Login', () => {
  const wrapper = renderer.create(<Login/>).toJSON()
  expect(wrapper).toMatchSnapshot();
})


