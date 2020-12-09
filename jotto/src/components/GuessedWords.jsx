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
        <h3 className="text-center">Guessed Words</h3>
        <table className="w-full sm:bg-white text-gray-900 rounded-lg overflow-hidden sm:shadow-lg my-5">
          <thead>
            <tr className="flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <th className="p-3 text-left">Guess</th>
              <th className="p-3 text-left">Matching Letter</th>
            </tr>
          </thead>
          <tbody className="flex-1 sm:flex-none">
            {props.guessedWords.map((word, index) => (
              <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0" data-test="guessed-word" key={index}>
                <td className="border-grey-light border hover:bg-gray-100 p-3">{word.guessedWord}</td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 text-right">{word.letterMatchCount}</td>
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
