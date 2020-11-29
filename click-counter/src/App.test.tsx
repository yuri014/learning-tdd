import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<App />);

const findByTestAttribute = (wrapper: Enzyme.ShallowWrapper, value: string) =>
  wrapper.find(`[data-test='${value}']`);

test('render without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttribute(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('render counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttribute(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const count = findByTestAttribute(wrapper, 'count').text();
  expect(count).toBe('0');
});

describe('Increment', () => {
  const wrapper = setup();
  const button = findByTestAttribute(wrapper, 'increment-button');

  test('renders increment button', () => {
    expect(button.length).toBe(1);
  });

  test('clicking on button increments counter display', () => {
    button.simulate('click');
    const count = findByTestAttribute(wrapper, 'count').text();
    expect(count).toBe('1');
  });
});

describe('Decrement', () => {
  const wrapper = setup();

  test('renders decrement button', () => {
    const decrementButton = findByTestAttribute(wrapper, 'decrement-button');
    expect(decrementButton.length).toBe(1);
  });

  test('clicking on button decrement counter display', () => {
    const incrementButton = findByTestAttribute(wrapper, 'increment-button');
    incrementButton.simulate('click');
    const decrementButton = findByTestAttribute(wrapper, 'decrement-button');
    decrementButton.simulate('click');
    const count = findByTestAttribute(wrapper, 'count').text();
    expect(count).toBe('0');
  });
});

describe('No count below 0', () => {
  const wrapper = setup();

  test('counter display do not go below 0', () => {
    const decrementButton = findByTestAttribute(wrapper, 'decrement-button');
    decrementButton.simulate('click');

    const count = findByTestAttribute(wrapper, 'count').text();
    expect(count).toBe('0');
  });

  test('error message is not displayed in the initial render', () => {
    const errorMessage = findByTestAttribute(wrapper, 'error-message');
    const isNotDisplayed = errorMessage.hasClass('hidden');
    expect(isNotDisplayed).toBeTruthy();
  });
});
