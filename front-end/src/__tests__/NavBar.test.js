import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NavBar from "../Components/NavBar";

import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NavBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders shallow without crashing", () => {
  shallow(<NavBar />);
});

it('snapshot NavBar', () => {
  const wrapper = renderer.create(<NavBar/>).toJSON()
  expect(wrapper).toMatchSnapshot();
})

