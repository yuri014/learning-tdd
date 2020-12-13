import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/configureStore';

export function wrapRootElement({ element }) {
  return <Provider store={store}>{element}</Provider>;
}
