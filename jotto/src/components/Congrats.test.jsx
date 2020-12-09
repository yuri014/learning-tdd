import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttribute, checkProps } from '../tests/testUtils';
import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = props => shallow(<Congrats {...props} />);

test('renders without an error', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttribute(wrapper, 'congrats-component');
  expect(component.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttribute(wrapper, 'congrats-component');
  expect(component.text()).toBe('');
});

test('renders non-empty congrats message when `success` prop is true', () => {
  const wrapper = setup({ success: true });
  const component = findByTestAttribute(wrapper, 'congrats-message');
  expect(component.text().length).not.toBe(0);
});

test('does not throw warning with expected props', () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
