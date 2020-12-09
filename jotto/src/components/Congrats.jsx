import React from 'react';
import PropTypes from 'prop-types';

export default (props) => (
  <>
    {props.success ? (
      <div data-test="congrats-component">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    ) : (
      <div data-test="congrats-component" />
    )}
  </>
);
