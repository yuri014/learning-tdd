import React from 'react';

interface Props {
  success: boolean;
}

export default (props: Props) => (
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
