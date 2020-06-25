import React from "react";
import { shallow } from "enzyme";
import Header from "./header";
import { findByTestAttribute } from "../../Utils/findByTestAttribute";

const setUp = (props = {}) => {
  const headerComponent = shallow(<Header {...props} />);
  return headerComponent;
};

describe("Header component", () => {
  let headerComponent;
  beforeEach(() => {
    headerComponent = setUp();
  });

  test("should render header component with no errors", () => {
    expect(headerComponent.length).toBe(1);
  });
  test("should render header tag with no errors", () => {
    const headerTag = findByTestAttribute(headerComponent, "headerComponent");
    expect(headerTag.length).toBe(1);
  });
  test("should render header logo with no errors", () => {
    const headerLogo = findByTestAttribute(headerComponent, "logoImg");
    expect(headerLogo.length).toBe(1);
  });
});
