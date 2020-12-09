import React from 'react';
import PropTypes from 'prop-types';

const Congrats = props => (
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

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
