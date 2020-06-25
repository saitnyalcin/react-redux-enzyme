import React from "react";
import { findByTestAttribute, checkProps } from "../../Utils";
import SharedButton from ".";
import { shallow } from "enzyme";

describe("Shared Button component", () => {
  describe("checking prop types ", () => {
    test("should NOT throw a warning ", () => {
      const expectedProps = {
        buttonText: "Example Button text",
        emitEvents: () => {}
      };
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: "Eample Button text",
        emitEvent: () => {}
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    test("should render a button", () => {
      expect(findByTestAttribute(wrapper, "buttonComponent").length).toBe(1);
    });
  });
});
