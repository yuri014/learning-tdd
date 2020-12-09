import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = props => {
  const contents = () => {
    if (props.guessedWords.length === 0) {
      return (
        <span data-test="guessed-instructions">
          Try to guess the secret word!
        </span>
      );
    }
    return (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
              <th>Matching Letter</th>
            </tr>
          </thead>
          <tbody>
            {props.guessedWords.map((word, index) => (
              <tr data-test="guessed-word" key={index}>
                <th>{word.guessedWord}</th>
                <th>{word.letterMatchCount}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return <div data-test="component-guessed-words">{contents()}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
