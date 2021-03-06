import ListItem from './list-item';
import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';

describe('<ListItem />', () => {
  test('should render correctly', () => {
    const context = { styles: { components: { listItem: {
      color: '#ff0'
    } } } };
    const wrapper = mount(<ListItem>Dog</ListItem>, { context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});
