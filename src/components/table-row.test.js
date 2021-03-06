import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import TableRow from './table-row';

describe('<TableRow />', () => {
  test('should render correctly', () => {
    const context = { styles: { components: { tableRow: {
      color: '#00f'
    } } } };
    const wrapper = mount((
      <TableRow><td>Table Row Content</td></TableRow>
    ), { context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});
