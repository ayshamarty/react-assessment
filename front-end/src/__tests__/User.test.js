import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import User from "../Components/User";

import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<User />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders shallow without crashing", () => {
  shallow(<User />);
});

it('snapshot User', () => {
  const wrapper = renderer.create(<User/>).toJSON()
  expect(wrapper).toMatchSnapshot();
})

