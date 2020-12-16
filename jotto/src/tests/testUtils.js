import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

import rootReducer from '../reducers/index';

export const storeFactory = initialState =>
  createStore(rootReducer, initialState);

export const findByTestAttribute = (wrapper, value) =>
  wrapper.find(`[data-test="${value}"]`);

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};
