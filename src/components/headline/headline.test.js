import { shallow } from "enzyme";
import React from "react";
import Headline from ".";
import { findByTestAttribute, checkProps } from "../../Utils";

const setUp = (props = {}) => {
  const wrapper = shallow(<Headline {...props} />);
  return wrapper;
};

describe("Headline component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("should render headerline component with no errors", () => {
    const headLineCmponent = setUp();
    expect(headLineCmponent.length).toBe(1);
  });

  it("should render props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test header",
        description: "Test desc"
      };
      wrapper = setUp(props);
    });
  });

  it("should render without errors", () => {
    expect(findByTestAttribute(wrapper, "headlineComponent").length).toBe(1);
  });

  it("should render H1 tag element", () => {
    expect(findByTestAttribute(wrapper, "header").length).toBe(1);
  });
  it("should render descr tag element", () => {
    expect(findByTestAttribute(wrapper, "description").length).toBe(1);
  });

  it("should render no props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
  });

  it("should render", () => {
    expect(findByTestAttribute(wrapper, "headlineComponent").length).toBe(1);
  });

  describe("Checking the prop types", () => {
    it("it should no throw any warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Decs",
        tempArray: [
          {
            fName: "Test fName",
            lName: "Test lName",
            age: 91
          }
        ]
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
    it("have props", () => {});
    it("have no props", () => {});
  });
});
