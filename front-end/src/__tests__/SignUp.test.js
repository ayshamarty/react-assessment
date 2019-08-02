import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SignUp from "../Components/SignUp";

import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SignUp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders shallow without crashing", () => {
  shallow(<SignUp />);
});

it('snapshot SignUp', () => {
  const wrapper = renderer.create(<SignUp/>).toJSON()
  expect(wrapper).toMatchSnapshot();
})

