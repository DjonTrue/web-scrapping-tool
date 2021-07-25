import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchUrl from "../components/SearchUrl/SearchUrl";

beforeAll(() => {
  Enzyme.configure({ adapter: new Adapter() });
});

const setUp = (...props) => shallow(<SearchUrl {...props} />)

describe("should SearchUrl contains elements", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  })

  test("should contain search-box", () => {
    const wrapper = component.find(".search-box");
    expect(wrapper.length).toBe(1);
  });

  test("should contain search-box__input", () => {
    const wrapper = component.find(".search-box__input");
    expect(wrapper.length).toBe(1);
  });

  test("should contain search-box__submit", () => {
    const wrapper = component.find(".search-box__submit");
    expect(wrapper.length).toBe(1);
  });
});

describe('Snapshot test', () => {
  test('Snapshot test of SearchUrl', () => {
    const component = shallow(<SearchUrl />)
    expect(component).toMatchSnapshot();
  })
})
