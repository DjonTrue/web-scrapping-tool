import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchUrl from '../components/SearchUrl/SearchUrl';

beforeAll(() => {
  Enzyme.configure({ adapter: new Adapter() });
})

test('should render SearchUrl', () => {
  const component = shallow(<SearchUrl />);
  const wrapper = component.find(".search-box")
  expect(wrapper.length).toBe(1)
})// TODO added component that will display name and info instagram's user