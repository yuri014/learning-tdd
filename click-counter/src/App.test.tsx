import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<App />);

const findByTestAttribute = (wrapper: Enzyme.ShallowWrapper, value: string) => wrapper.find(`[data-test='${value}']`);

test('render without error', () => {
    const wrapper = setup();
    const appComponent = findByTestAttribute(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders button', () => {
  const wrapper = setup();
  const button = findByTestAttribute(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

test('render counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttribute(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test('clicking on button increments counter display', () => {
  const wrapper = setup();
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});
