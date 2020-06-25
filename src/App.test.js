import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import App from "./App";

test("renders the App component", () => {
  const wrapper = shallow(<App />);
  const component = wrapper.find("div.App");
  expect(component.length).toBe(1);
});
